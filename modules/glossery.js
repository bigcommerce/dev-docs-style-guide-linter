module.exports = {
    controlPanel: {
        fn: function (text) {
            var positives = ["Control Panel"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "control panel" instead'
    },
    bigcommerce: {
        fn: function (text) {
            var positives = ["Big Commerce"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "BigCommerce" instead'
    },
    blueprint: {
        fn: function (text) {
            var positives = ["Blueprint Themes", "Blueprint-based themes"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "Blueprint themes" instead'
    },
    channelManager: {
        fn: function (text) {
            var positives = ["channel manager"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "Channel Manager" instead'
    },
    ecommerce: {
        fn: function (text) {
            var positives = ["e-commerce", "Ecommerce", "eCommerce"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "ecommerce" instead'
    },
    community: {
        fn: function (text) {
            var positives = ["community"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "Community" instead when referring to the BC Community.'
    },
    devcenter: {
        fn: function (text) {
            var positives = ["Developer Center", "DevCenter", "devcenter", "developer center"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "Dev Center" instead.'
    },
    frontmatter: {
        fn: function (text) {
            var positives = ["frontmatter"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "front matter" instead.'
    },
    handlebars: {
        fn: function (text) {
            var positives = ["handlebars"];
            var re = new RegExp(positives.join('|'), 'g');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "Handlebars" instead.'
    },
    permanentURL: {
        fn: function (text) {
            var positives = ["temporary URL", "alternate URL", "canonical URL", "mybigcommerce.com URL"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "permanent URL" instead in reference to permanent BigCommerce store URL.'
    },
    sku: {
        fn: function (text) {
            var positives = ["sku"];
            var re = new RegExp(positives.join('|'), 'g');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "SKU" instead.'
    },
    stencil: {
        fn: function (text) {
            var positives = ["Stencil Themes", "Stencil-based themes"];
            var re = new RegExp(positives.join('|'), 'g');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "Stencil themes" instead'
    },
    storefront: {
        fn: function (text) {
            var positives = ["Store Front"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "storefront" instead'
    },
    wordPress: {
        fn: function (text) {
            var positives = ["Word Press", "word press", "Word press", "Wordpress"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "WordPress" instead'
    },
    ampersand: {
        fn: function (text) {
            var positives = ["&"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "and" instead unless referencing code'
    },
    access: {
        fn: function (text) {
            var positives = ["access/w"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Avoid using "access" as a verb, if possible. Instead, use friendlier words like \'see\',  \'edit\',  \'find\',  \'use\', or  \'view.\''
    },
    addin: {
        fn: function (text) {
            var positives = ["addin"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "add-in" instead'
    },
    allowsYouTo: {
        fn: function (text) {
            var positives = ["allows you"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "lets you" instead'
    },
    apis: {
        fn: function (text) {
            var positives = ["API's"];
            var re = new RegExp(positives.join('|'), 'gi');
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'Please use "APIs" instead'
    },
}