#!/usr/bin/env node

import _ from 'lodash';
import minimist from 'minimist';
import chalk from 'chalk';
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
import dictionaryEn from 'dictionary-en'
import { reporterPretty } from 'vfile-reporter-pretty'

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
const dictionary = await setupDictionaries(config);
const allRules = await ruleHandler(__dirname);
const { lintRules, fatalRules, warnRules, suggestRules } = getLintRules(config);
const ignoreWords = _.difference(config.ignoreGeneral, config.noIgnore);

// linter bypasses strings inside backticks

async function processFiles() {

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

    if (cli.flags.verbose) {
        console.log(chalk.red.underline('Fatal rules:\n'), chalk.red(fatalRules));
        console.log(chalk.yellow.underline('Warnings:\n'), chalk.yellow(warnRules));
        console.log(chalk.gray.underline('Suggestions:\n'), chalk.gray(suggestRules));
        console.log(chalk.green.underline('Ignoring:\n'), chalk.green(ignoreWords));
    }

    try {
        let files = await Promise.all(docFiles.map(file => toVFile.read(file)));
        let results = await Promise.all(files.map(file => checkFile(file)));

        console.log(
            report(results, {
                silent: silent,
            })
        );

        // Check for errors and exit with error code if found
        let hasErrors = false;
        results.forEach((result) => {
            result.messages.forEach((message) => {
                if (message.fatal) hasErrors = true;
            });
        });
        if (hasErrors) process.exit(1);
        return results;
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

const readabilityConfig = config.rules['retext-readability'];

function getPackageConfig(packageName) {
    const ruleConfig = config.rules[packageName];

    // Check if the rule has an ignore list
    if (ruleConfig && ruleConfig.ignore) {
        return {
            ...ruleConfig,
            ignore: config.ignoreGeneral.concat(ruleConfig.ignore)
        };
    }

    // If no ignore list, just return the rule config as is
    return ruleConfig;
}

async function checkFile(file) {

    return new Promise((resolve, reject) => {
        remark()
            // linter bypasses strings inside backticks
            .use(function () {
                return function (tree) {
                    visit(tree, 'inlineCode', node => {
                        return false;
                    });
                }
            })
            .use(remarkMdx)
            // .use(remarkPresetLintRecommended)
            // https://github.com/remarkjs/remark-validate-links
            .use(validateLinks, {})
            .use(validateExternalLinks, config.rules['remark-lint-no-dead-urls'] || {})
            // .use(writeGood, {
            //     whitelist: ignoreWords.concat(config.rules['remark-lint'].ignore) || [],
            //     checks: allRules
            // })
            .use(
                remark2retext,
                retext() // Convert markdown to plain text
                    // classify url-like values as syntax, not natural language
                    .use(syntaxURLS)
                    // .use(readability, getPackageConfig('retext-readability'))
                    // .use(simplify, getPackageConfig('retext-simplify'))
                    // .use(writeGoodWordNode, {
                    //     severity: 'suggest',
                    //     whitelist: ignoreWords || [],
                    //     checks: glossery
                    // })
                    // .use(equality, getPackageConfig('retext-equality'))
                    // .use(intensify, getPackageConfig('retext-intensify'))
                    // .use(repeatedWords)
                    // .use(indefiniteArticles)
                    // .use(assuming, getPackageConfig('retext-assuming'))
                    .use(spell, {
                        dictionary: dictionary,
                        ignore: ignoreWords || [],
                        ignoreLiteral: true
                    })
            )
            // plugin to enable, disable, and ignore messages.
            // .use(control, {
            //     name: 'linter',
            //     source: [
            //         'remark-lint',
            //         'retext-spell',
            //         'remark-lint-write-good',
            //         'retext-readability',
            //         'retext-simplify',
            //         'retext-equality',
            //         'retext-intensify',
            //         'retext-google-styleguide',
            //     ],
            // })
            .process(file, function (err, results) {
                if (err) {
                    return reject(err);
                }
                let filteredMessages = [];
                results.messages.forEach((message) => {
                    results.messages = filteredMessages;
                    let hasFatalRuleId = _.includes(fatalRules, message.ruleId);
                    let hasFatalSource = _.includes(fatalRules, message.source);
                    let hasSuggestedRuleId = _.includes(suggestRules, message.ruleId);
                    let hasSuggestedSource = _.includes(suggestRules, message.source);

                    if (_.includes(fatalRules, message.ruleId) || _.includes(fatalRules, message.source)) {
                        message.fatal = true;
                    }
                    if (suggestRules && (hasSuggestedRuleId || hasSuggestedSource)) {
                        message
                        message.message = message.message.replace(
                            /don\’t use “(.*)”/gi,
                            (match, word) => {
                                return 'Use “' + word + '” sparingly';
                            }
                        );
                        delete message.fatal;
                        // message.severity = 'suggest'; // Explicitly set severity to "suggest"
                    }

                    filteredMessages.push(message);
                });
                resolve(results);
            });
    })
};

(async () => {
    const cli = setupCli();
    const config = handleConfiguration(cli.flags);
    const dictionary = await setupDictionaries(config);
    const allRules = await ruleHandler(__dirname);
    const { lintRules, fatalRules, warnRules, suggestRules } = getLintRules(config);
    await processFiles();
})();

