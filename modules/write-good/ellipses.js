module.exports = {
    ellipsis: {
        fn: function (text) {
            var re = /\.\.\./gi
            var suggestions = [];
            while (match = re.exec(text)) {
                suggestions.push({
                    index: match.index,
                    offset: match[0].length,
                });
            }
            return suggestions;
        },
        explanation: 'In general, don\'t use an ellipsis. [Google Style Guide](https://developers.google.com/style/ellipses)'
    }
}