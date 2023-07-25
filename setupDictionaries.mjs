// setupDictionaries.js

import en_US from 'dictionary-en-us';
import fs from 'fs';
import { map } from 'async';

function setupDictionaries(config) {
    let dictionary = en_US;

    let myReadFile = function (dictPath, cb) {
        fs.readFile(dictPath, function (err, buffer) {
            cb(err, !err && buffer);
        });
    };

    if (config.dictionaries && config.dictionaries.length >= 1) {
        dictionary = function (cb) {
            en_US(function (err, primary) {
                map(config.dictionaries, myReadFile, function (err, results) {
                    results.unshift(primary.dic);
                    let combinedDictionaries = Buffer.concat(results);
                    cb(
                        err,
                        !err && {
                            aff: primary.aff,
                            dic: combinedDictionaries,
                        }
                    );
                });
            });
        };
    }

    return dictionary;
}

export default setupDictionaries;
