// cliSetup.js
import meow from 'meow';

function setupCli() {
    const cli = meow(
        `
    Usage
      $ quality-docs <glob>

    Options
      -c, --config  A JSON config file to override default linting rules.
      -i, --ignore  A word or phrase to ignore and add to the config file's list.
      -s, --silent  Silent mode. Mutes warnings and only shows fatal errors.
      -v, --verbose Prints which config is used.

    Examples
      $ quality-docs --config custom-config.json
`,
        {
            importMeta: import.meta,
            alias: {
                c: 'config',
                i: 'ignore',
                s: 'silent',
                v: 'verbose',
            },
        }
    );

    return cli;
}

export default setupCli;
