// checkFile.js

import remark from 'remark';
import remarkMdx from 'remark-mdx';
import validateLinks from 'remark-validate-links';
import validateExternalLinks from 'remark-lint-no-dead-urls';
import writeGood from 'remark-lint-write-good';
import remark2retext from 'remark-retext';
import retext from 'retext';
import readability from 'retext-readability';
import simplify from 'retext-simplify';
import writeGoodWordNode from './modules/write-good/index.mjs';
import equality from 'retext-equality';
import syntaxURLS from 'retext-syntax-urls';
import intensify from 'retext-intensify';
import repeatedWords from 'retext-repeated-words';
import indefiniteArticles from 'retext-indefinite-article';
import assuming from 'retext-assuming';
import spell from 'retext-spell';
import visit from 'unist-util-visit';
import _ from 'lodash';

async function checkFile(file, dictionary, config, allRules, fatalRules, suggestRules) {
    const processedFile = await remark()
        .use(function () {
            return function (tree) {
                visit(tree, 'inlineCode', node => {
                    return false;
                });
            }
        })
        .use(remarkMdx)
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
            retext()
                .use(readability, config.rules['retext-readability'] || {})
                .use(simplify, {
                    ignore: config.ignore || ["render"]
                })
                .use(writeGoodWordNode, {
                    whitelist: ['as'],
                    checks: config.glossery
                })
                .use(equality, {
                    ignore: config.ignore && [
                        'just',
                        'easy',
                        'disable',
                        'disabled',
                        'host',
                    ],
                })
                .use(syntaxURLS)
                .use(intensify, {
                    ignore: config.ignore || []
                })
                .use(repeatedWords)
                .use(indefiniteArticles)
                .use(assuming, {
                    ignore: config.ignore || [],
                })
                .use(spell, {
                    dictionary: dictionary,
                    ignore: config.ignore || [],
                    ignoreLiteral: true
                })
        )
        .process(file);

    let filteredMessages = [];
    processedFile.messages.forEach((message) => {
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
    processedFile.messages = filteredMessages;

    return processedFile;
}

export default checkFile;
