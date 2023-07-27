// getLintRules.js

// Import lodash library for utility functions.
import _ from 'lodash';

// Define the function getLintRules, which takes in a config object as a parameter.
function getLintRules(config) {
    // This function gets lint rules from the configuration based on their severity.

    // The _.mapValues function from lodash is used to create a new object with the same keys as config.rules,
    // but with each value transformed by the provided function.
    const lintRules = _.mapValues(config.rules, (value) => {
        // Check if value is boolean. If true, simply return the value without transformation.
        if (_.isBoolean(value)) return value;

        // If the value has a 'severity' property, some additional logic is applied.
        if (value.hasOwnProperty('severity')) {
            // If 'severity' is the only property in the value object, it's replaced with 'true'.
            if (Object.keys(value).length === 1) return true;

            // If there are more properties besides 'severity', a new object 'newValue' is created
            // that includes all properties of value except 'severity'.
            let newValue = {};
            for (let prop in value) {
                if (prop !== 'severity') newValue[prop] = value[prop];
            }
            // Return the new object.
            return newValue;
        }
        // If the value doesn't have a 'severity' property, return it without transformation.
        return value;
    });

    // Generate arrays of rule names (keys) for each severity level.
    // This is done by filtering config.rules for values with the respective severity
    // and then getting the keys of the resulting objects using lodash's _.keys function.

    // Generate array of rule names for 'fatal' severity.
    const fatalRules = _.keys(
        _.pickBy(config.rules, (value) => {
            return value.severity === 'fatal';
        })
    );

    // Generate array of rule names for 'warning' severity.
    const warnRules = _.keys(
        _.pickBy(config.rules, (value) => {
            return value.severity === 'warning';
        })
    );

    // Generate array of rule names for 'suggest' severity.
    const suggestRules = _.keys(
        _.pickBy(config.rules, (value) => {
            return value.severity === 'suggest';
        })
    );

    // Return an object containing all transformed lint rules and arrays of rule names for each severity level.
    return { lintRules, fatalRules, warnRules, suggestRules };
}

// Export getLintRules function as default export.
export default getLintRules;
