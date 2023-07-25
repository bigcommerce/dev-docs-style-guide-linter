// handleConfiguration.js

import fs from 'fs';
import _ from 'lodash';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

function handleConfiguration(cliFlags) {
    const defaultConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'default-config.json'), 'utf-8'));

    // Use --config file if provided, otherwise defaults
    let config = {};
    let customConfig = {};

    defaultConfig.dictionaries.forEach((dictPath, index, arr) => {
        arr[index] = path.join(__dirname, dictPath);
    });

    if (!cliFlags.config) {
        config = defaultConfig;
    } else {
        customConfig = JSON.parse(fs.readFileSync(cliFlags.config, 'utf8'));

        // Handling for custom configurations...

        // If --config and --ignore are specified, update the config with new ignore
        if (customConfig.ignore && cliFlags.ignore) {
            let isValidString = /^[ A-Za-z0-9_@./#&+-]*$/.test(cliFlags.ignore);
            let isUnique = !_.includes(customConfig.ignore, cliFlags.ignore);
            if (isValidString && isUnique) {
                customConfig.ignore.push(cliFlags.ignore);
                customConfig.ignore.sort();
                fs.writeFile(
                    cliFlags.rules,
                    JSON.stringify(rules, null, 2),
                    function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log(
                            "Added '" +
                            cliFlags.ignore +
                            "' to ignore list. Don't forget to commit the changes to " +
                            cliFlags.config +
                            '.'
                        );
                    }
                );
            } else {
                console.log(
                    "Could not add '" +
                    cliFlags.ignore +
                    "' to ignore list. Please add it manually."
                );
            }
        }

        // If custom dictionaries are provided, prepare their paths
        if (customConfig.dictionaries) {
            // Convert dictionaries string to an array
            let customDict = customConfig.dictionaries;
            if (typeof customDict === 'string' || customDict instanceof String) {
                customConfig.dictionaries = [customDict];
            }

            // Add cwd to custom dictionary paths
            customConfig.dictionaries.forEach((dictionaryPath) => {
                dictionaryPath = process.cwd() + dictionaryPath;
            });
        } else {
            // Remove empty dictonaries key so it doesn't override default config
            delete customConfig.dictionaries;
        }

        // Merge default and custom rules, preferring customRules and concatenating arrays
        config = _.mergeWith(defaultConfig, customConfig, (objValue, srcValue) => {
            if (_.isArray(objValue)) {
                return _.uniq(objValue.concat(srcValue));
            }
        });
    }

    return config;
}

export default handleConfiguration;
