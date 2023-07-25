#!/usr/bin/env node

import _ from 'lodash';
import minimist from 'minimist';
import chalk from 'chalk';
import en_US from 'dictionary-en-us';
import fs from 'fs';
import * as fsPromise from 'node:fs/promises';
import { map } from 'async';
import meow from 'meow';
import path from 'path';
import remark from 'remark';
import remarkMdx from 'remark-mdx'
import remark2retext from 'remark-retext';
import report from 'vfile-reporter';
import retext from 'retext';
import toString from 'nlcst-to-string';
import toVFile from 'to-vfile';
import visit from 'unist-util-visit';
import { fileURLToPath } from 'url';
import equality from 'retext-equality';
import intensify from 'retext-intensify';
import control from 'remark-message-control';
import spell from 'retext-spell';
import lint from 'remark-lint';
import validateLinks from 'remark-validate-links';
import validateExternalLinks from 'remark-lint-no-dead-urls';
import syntaxURLS from 'retext-syntax-urls';
import repeatedWords from 'retext-repeated-words';
import indefiniteArticles from 'retext-indefinite-article';
import assuming from 'retext-assuming';
import readability from 'retext-readability';
import simplify from 'retext-simplify';

import writeGoodWordNode from './modules/write-good/index.mjs';
import writeGood from 'remark-lint-write-good';
import writeGoodExtension from './modules/write-good/writeGoodExtension.js';
import firstPerson from './modules/write-good/firstPerson.js';
import genderBias from './modules/write-good/genderBias.js';
import dateFormat from './modules/write-good/dateFormat.js';
import ellipses from './modules/write-good/ellipses.js';
import emdash from './modules/write-good/emdash.js';
import exclamation from './modules/write-good/exclamation.js';
import general from './modules/write-good/general.js';
import glossery from './modules/write-good/glossery.js';

import setupCli from './cliSetup.mjs';
import handleConfiguration from './handleConfiguration.mjs';
import setupDictionaries from './setupDictionaries.mjs';
import ruleHandler from './ruleHandler.mjs';
import getLintRules from './getLintRules.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cli = setupCli();
const config = handleConfiguration(cli.flags);
const dictionary = setupDictionaries(config);
const allRules = await ruleHandler(__dirname);
const { lintRules, fatalRules, warnRules, suggestRules } = getLintRules(config);

let silent = cli.flags.silent || false;

// Build array of files that match input glob
let docFiles = [];

cli.input.forEach((file) => {
    if (!file.includes('*')) docFiles.push(file);
});

if (docFiles.length <= 0) {
    console.warn('No files found to lint.');
    process.exit(1);
}
let readabilityConfig = config.rules['retext-readability'];

let ignoreWords = _.difference(config.ignore, config.noIgnore);

if (cli.flags.verbose) {
    console.log(chalk.red.underline('Fatal rules:\n'), chalk.red(fatalRules));
    console.log(chalk.yellow.underline('Warnings:\n'), chalk.yellow(warnRules));
    console.log(chalk.gray.underline('Suggestions:\n'), chalk.gray(suggestRules));
    console.log(chalk.green.underline('Ignoring:\n'), chalk.green(ignoreWords));
}


map(docFiles, toVFile.read, function (err, files) {
    let hasErrors = false;

    map(files, checkFile, function (err, results) {
        console.log(
            report(err || results, {
                silent: silent,
            })
        );

        // Check for errors and exit with error code if found
        results.forEach((result) => {
            result.messages.forEach((message) => {
                if (message.fatal) hasErrors = true;
            });
        });
        if (hasErrors) process.exit(1);
    });

    function checkFile(file, cb) {
        remark()
            .use(function () {
                return function (tree) {
                    visit(tree, 'inlineCode', node => {
                        return false;
                    });
                }
            })
            .use(remarkMdx)
            // .use(remarkPresetLintRecommended)
            .use(validateLinks, {})
            .use(validateExternalLinks, {
                skipLocalhost: true,
                skipUrlPatterns: ['https://github.com'],
                gotOptions: {
                    baseUrl: 'https//developer.bigcommerce.com',
                },
            })
            .use(writeGood, {
                checks: allRules
            })
            .use(
                remark2retext,
                retext() // Convert markdown to plain text
                    .use(readability, readabilityConfig || {})
                    .use(simplify, {
                        ignore: ignoreWords || ["render"]
                    })
                    .use(writeGoodWordNode, {
                        whitelist: ['as'],
                        checks: glossery
                    })
                    .use(equality, {
                        ignore: ignoreWords && [
                            'just',
                            'easy',
                            'disable',
                            'disabled',
                            'host',
                        ],
                    })
                    .use(syntaxURLS)
                    .use(intensify, {
                        ignore: ignoreWords || []
                    })
                    .use(repeatedWords)
                    .use(indefiniteArticles)
                    .use(assuming, {
                        ignore: ignoreWords || [],
                    })
                    .use(spell, {
                        dictionary: dictionary,
                        ignore: ignoreWords || [],
                        ignoreLiteral: true
                    })
            )
            // plugin to enable, disable, and ignore messages.
            // .use(control, {
            //     name: 'quality-docs',
            //     source: [
            //         'remark-lint',
            //         'remark-lint-write-good',
            //         'retext-readability',
            //         'retext-simplify',
            //         'retext-equality',
            //         'retext-intensify',
            //         'retext-google-styleguide',
            //     ],
            // })
            .process(file, function (err, results) {
                let filteredMessages = [];
                results.messages.forEach((message) => {
                    let hasFatalRuleId = _.includes(fatalRules, message.ruleId);
                    let hasFatalSource = _.includes(fatalRules, message.source);
                    let hasSuggestedRuleId = _.includes(suggestRules, message.ruleId);
                    let hasSuggestedSource = _.includes(suggestRules, message.source);

                    if (suggestRules && (hasSuggestedRuleId || hasSuggestedSource)) {
                        message.message = message.message.replace(
                            /don\’t use “(.*)”/gi,
                            (match, word) => {
                                return 'Use “' + word + '” sparingly';
                            }
                        );
                        delete message.fatal;
                    }

                    if (fatalRules && (hasFatalRuleId || hasFatalSource)) {
                        message.fatal = true;
                    }

                    filteredMessages.push(message);
                });
                results.messages = filteredMessages;
                cb(null, results);
            });
    }
});
