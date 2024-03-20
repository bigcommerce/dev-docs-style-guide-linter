import { map } from "async";
import dictionaryEn from "dictionary-en";
import "dotenv/config";
import fs from "fs";
import https from "https";

// Function to fetch the bigcommerce.dic file from a GitHub repository
const fetchBigcommerceDic = () => {
  return new Promise((resolve, reject) => {
    const url = "https://raw.githubusercontent.com/bigcommerce/dev-docs-style-guide-linter/master/dictionaries/bigcommerce.dic"; // Replace with the raw URL to the bigcommerce.dic file

    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      console.error(err);
      reject(err);
    });
  });
};

async function setupDictionaries(config) {
  let dictionary = dictionaryEn;

  let myReadFile = function (dictPath, cb) {
    fs.readFile(dictPath, function (err, buffer) {
      cb(err, !err && buffer);
    });
  };

  // Fetch the external bigcommerce dictionary
  let extDictData;
  try {
    const extDictString = await fetchBigcommerceDic();
    extDictData = Buffer.from(extDictString, 'utf8');
  } catch (error) {
    console.error("Failed to fetch bigcommerce.dic:", error);
  }

  if (config.dictionaries && config.dictionaries.length >= 1) {
    dictionary = function (cb) {
      dictionaryEn(function (err, primary) {
        map(config.dictionaries, myReadFile, function (err, results) {
          if (extDictData) {
            results.unshift(extDictData);
          }
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
