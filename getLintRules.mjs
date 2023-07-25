// getLintRules.js

import _ from 'lodash';

function getLintRules(config) {
    // Get lint rules based on severity
    const lintRules = _.mapValues(config.rules, (value) => {
        if (_.isBoolean(value)) return value;
        if (value.hasOwnProperty('severity')) {
            if (Object.keys(value).length === 1) return true;
            let newValue = {};
            for (let prop in value) {
                if (prop !== 'severity') newValue[prop] = value[prop];
            }
            return newValue;
        }
        return value;
    });

    const fatalRules = _.keys(
        _.pickBy(config.rules, (value) => {
            return value.severity === 'fatal';
        })
    );

    const warnRules = _.keys(
        _.pickBy(config.rules, (value) => {
            return value && (value.severity === 'warn' || !value.severity);
        })
    );

    const suggestRules = _.keys(
        _.pickBy(config.rules, (value) => {
            return value.severity === 'suggest';
        })
    );

    return { lintRules, fatalRules, warnRules, suggestRules };
}

export default getLintRules;
