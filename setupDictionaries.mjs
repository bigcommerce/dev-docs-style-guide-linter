// setupDictionaries.js

import en_US from 'dictionary-en-us';
import fs from 'fs';
import { map } from 'async';
import 'dotenv/config'

async function setupDictionaries(config) {
    // const extDictionary = async () => {
    //     try {
    //         const query = `
    //     query {
    //         linterDictionaryCollection {
    //             items {
    //                 sys {
    //                     id
    //                 }
    //                 dictionary
    //             }
    //         },
    //     }
    //     `;
    //         const response = await fetch(
    //             `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_API}`,
    //                 },
    //                 body: JSON.stringify({
    //                     query: query,
    //                     variables: {},
    //                 }),
    //             }
    //         );
    //         const data = await response.json();
    //         if (data.errors) {
    //             console.error(data.errors);
    //             throw new Error("Failed to fetch events");
    //         }
    //         const dict = data.data.linterDictionaryCollection.items;
    //         // console.log(dict[0].dictionary)
    //         // Join the array of strings into a single string separated by newlines,
    //         // and convert it to a Buffer
    //         const dictBuffer = Buffer.from(dict[0].dictionary.join('\n'), 'utf8');
    //         return dictBuffer;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // let extDictData = await extDictionary();

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
                    // Add the extDictData to the combinedDictionaries
                    // results.unshift(extDictData);
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
