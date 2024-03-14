#!/usr/bin/env node

import chalk from "chalk";
import _ from "lodash";
import path from "path";
import remark from "remark";
import remarkMdx from "remark-mdx";
import remark2retext from "remark-retext";
import strip from "strip-markdown";
import report from "vfile-reporter";
// import reporter from "vfile-reporter-position";
import validateExternalLinks from "remark-lint-no-dead-urls";
import writeGood from "remark-lint-write-good";
import validateLinks from "remark-validate-links";
import retext from "retext";
import assuming from "retext-assuming";
import equality from "retext-equality";
import indefiniteArticles from "retext-indefinite-article";
import readability from "retext-readability";
import repeatedWords from "retext-repeated-words";
import simplify from "retext-simplify";
import spell from "retext-spell";
import syntaxURLS from "retext-syntax-urls";
import toVFile from "to-vfile";
import visit from "unist-util-visit";
import { fileURLToPath } from "url";
import glossery from "./modules/write-good/glossery.js";
import writeGoodWordNode from "./modules/write-good/index.mjs";

import setupCli from "./cliSetup.mjs";
import getLintRules from "./getLintRules.mjs";
import handleConfiguration from "./handleConfiguration.mjs";
import ruleHandler from "./ruleHandler.mjs";
import setupDictionaries from "./setupDictionaries.mjs";

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
    if (!file.includes("*")) docFiles.push(file);
  });

  if (docFiles.length <= 0) {
    console.warn("No files found to lint.");
    process.exit(1);
  }

  if (cli.flags.verbose) {
    console.log(chalk.red.underline("Fatal rules:\n"), chalk.red(fatalRules));
    console.log(chalk.yellow.underline("Warnings:\n"), chalk.yellow(warnRules));
    console.log(
      chalk.gray.underline("Suggestions:\n"),
      chalk.gray(suggestRules),
    );
    console.log(chalk.green.underline("Ignoring:\n"), chalk.green(ignoreWords));
  }

  try {
    let files = await Promise.all(docFiles.map((file) => toVFile.read(file)));
    let results = await Promise.all(files.map((file) => checkFile(file)));

    console.log(
      // reporterPretty(results, {
      report(results, {
        silent: silent,
      }),
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
    console.error("An error occurred:", error);
  }
}

const readabilityConfig = config.rules["retext-readability"];

function getPackageConfig(packageName) {
  const ruleConfig = config.rules[packageName];

  // Check if the rule has an ignore list
  if (ruleConfig && ruleConfig.ignore) {
    return {
      ...ruleConfig,
      ignore: config.ignoreGeneral.concat(ruleConfig.ignore),
    };
  }

  // If no ignore list, just return the rule config as is
  return ruleConfig;
}

async function checkFile(file) {
  function remarkIgnoreImages() {
    return (tree) => {
      visit(tree, "image", (node, index, parent) => {
        if (parent) {
          parent.children.splice(index, 1);
        }
      });
    };
  }

  return new Promise((resolve, reject) => {
    remark()
      // .use(strip, { remove: ["inlineCode", "table", "yaml"] })
      // .use(remarkIgnoreImages)
      .use(remarkMdx)
      // .use(remarkPresetLintRecommended)
      // https://github.com/remarkjs/remark-validate-links
      .use(validateLinks, {})
      .use(
        validateExternalLinks,
        config.rules["remark-lint-no-dead-urls"] || {},
      )
      .use(writeGood, {
        whitelist: ignoreWords.concat(config.rules["remark-lint"].ignore) || [],
        checks: allRules,
      })
      .use(
        remark2retext,
        retext() // Convert markdown to plain text
          // classify url-like values as syntax, not natural language
          .use(syntaxURLS)
          .use(readability, getPackageConfig("retext-readability"))
          .use(simplify, getPackageConfig("retext-simplify"))
          .use(writeGoodWordNode, {
            severity: "suggest",
            whitelist: ignoreWords || [],
            checks: glossery,
          })
          .use(equality, getPackageConfig("retext-equality"))
          // .use(intensify, getPackageConfig('retext-intensify'))
          .use(repeatedWords)
          .use(indefiniteArticles)
          .use(assuming, getPackageConfig("retext-assuming"))
          .use(spell, {
            dictionary: dictionary,
            ignore: ignoreWords || [],
            ignoreLiteral: true,
          }),
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
          console.log(message)
          results.messages = filteredMessages;
          // let hasFatalRuleId = _.includes(fatalRules, message.ruleId);
          // let hasFatalSource = _.includes(fatalRules, message.source);
          // let hasSuggestedRuleId = _.includes(suggestRules, message.ruleId);
          // let hasSuggestedSource = _.includes(suggestRules, message.source);

          // if (
          //   _.includes(fatalRules, message.ruleId) ||
          //   _.includes(fatalRules, message.source)
          // ) {
          //   message.fatal = true;
          // }
          // if (suggestRules && (hasSuggestedRuleId || hasSuggestedSource)) {
          //   message;
          //   message.message = message.message.replace(
          //     /don\’t use “(.*)”/gi,
          //     (match, word) => {
          //       return "Use “" + word + "” sparingly";
          //     },
          //   );
          //   delete message.fatal;
          //   // message.severity = 'suggest'; // Explicitly set severity to "suggest"
          // }

          message.source = `\`${message.source}\``;
          message.ruleId = `\`${message.ruleId}\``;

          filteredMessages.push(message);
        });
        // results.contents = file.contents;
        resolve(results);
      });
  });
}

(async () => {
  const cli = setupCli();
  const config = handleConfiguration(cli.flags);
  const dictionary = await setupDictionaries(config);
  const allRules = await ruleHandler(__dirname);
  const { lintRules, fatalRules, warnRules, suggestRules } =
    getLintRules(config);
  await processFiles();
})();
