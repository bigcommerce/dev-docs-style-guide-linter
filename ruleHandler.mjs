// ruleHandler.js

import _ from 'lodash';
import path from 'path';
import * as fsPromise from 'node:fs/promises';

async function ruleHandler(__dirname) {
    // combines all write-good custom rules into one object
    let allRules = {};
    const rulesDirectory = path.join(__dirname, './modules/write-good/');

    const ruleFiles = await fsPromise.readdir(rulesDirectory);

    for (const file of ruleFiles) {
        if (file.endsWith('.js')) {
            const rule = await import(path.join(rulesDirectory, file));
            allRules = { ...allRules, ...rule.default };
        }
    }
    // end combines all write-good custom rules into one object

    return allRules;
}

export default ruleHandler;
