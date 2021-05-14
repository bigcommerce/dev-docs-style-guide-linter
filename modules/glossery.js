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
    abnormal: {
        fn: function (text) {
            var positives = ["abnormal"];
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
        explanation: 'Don\'t use to refer to a person. OK to use to refer to a condition of a computer system.'
    },
    abort: {
        fn: function (text) {
            var positives = ["abort"];
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
        explanation: 'Avoid in general usage. Instead, use words like stop, exit, cancel, or end. In Linux, abort refers to a type of signal that terminates an abnormal process.'
    },
    above: {
        fn: function (text) {
            var positives = ["above"];
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
        explanation: 'Don\'t use. Instead, use "preceding."'
    },
    accountName: {
        fn: function (text) {
            var positives = ["account name"];
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
        explanation: 'Don\'t use. Instead, use "username."'
    },
    actionable: {
        fn: function (text) {
            var positives = ["actionable"];
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
        explanation: 'Avoid unless it\'s the clearest and simplest phrasing for your audience.Instead of using it, leave it out or replace it with a phrase like "that you can act on" or "useful." Don\'t use it in the legal sense without consulting a lawyer.'
    },
    addOn: {
        fn: function (text) {
            var positives = ["addon"];
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
        explanation: 'Please use "add-on" instead'
    },
    addressBar: {
        fn: function (text) {
            var positives = ["url bar", "omnibox"];
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
        explanation: 'Please use "address bar" instead'
    },
    adHoc: {
        fn: function (text) {
            var positives = ["ad hoc"];
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
        explanation: 'Okay to use in database and analytics contexts to mean \"free-form\" or \"user-written\" (for example, ad hoc queries or an ad hoc chart). Don\'t hyphenate or italicize the term. For other contexts, try to find a more specific English equivalent.'
    },
    agnostic: {
        fn: function (text) {
            var positives = ["agnostic"];
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
        explanation: 'Don\'t use. Instead, use a precise term like platform-independent.'
    },
    agnostic: {
        fn: function (text) {
            var positives = ["agnostic"];
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
        explanation: 'Don\'t use. Instead, use a precise term like platform-independent.'
    },
    ajax: {
        fn: function (text) {
            var positives = ["Ajax", "ajax"];
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
        explanation: 'At the moment (as of mid-2017), our help site writes the term as AJAX, so that\'s how we currently write it in developer documentation as well. Our impression is that over time, more people are writing it as Ajax, but AJAX is not uncommon. Jesse James Garrett, who coined the term, says it\'s not an acronym, but many others treat it as one.'
    },
    aka: {
        fn: function (text) {
            var positives = ["aka"];
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
        explanation: 'Don\'t use. Instead, write out also known as, or present an alternative term using parentheses or the word or. You can also write out a definition.'
    },
    allowlist: {
        fn: function (text) {
            var positives = ["allowlist"];
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
        explanation: 'Don\'t use as a verb. Instead, rewrite to improve clarity. OK to use allowlist as a noun.'
    },
    term: {
        fn: function (text) {
            var positives = ["allows you to"];
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
        explanation: 'Don\'t use. Instead, use \"lets you.\"'
    },
    term: {
        fn: function (text) {
            var positives = ["Alpha"];
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
        explanation: 'Lowercase except when part of a product name.'
    },
    term: {
        fn: function (text) {
            var positives = ["Alpha"];
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
        explanation: 'Lowercase except when part of a product name.'
    },
    term: {
        fn: function (text) {
            var positives = ["and so on"];
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
        explanation: 'Avoid using \"and so on\" whenever possible.'
    },
    term: {
        fn: function (text) {
            var positives = ["as"];
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
        explanation: 'If you mean \"because,\" then use \"because\" instead of \"as.\" \"As\" is ambiguous; it can refer to the passage of time. \"Because\" refers to causation or the reason for something.'
    },
    term: {
        fn: function (text) {
            var positives = ["as"];
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
        explanation: 'If you mean \"because,\" then use \"because\" instead of \"as.\" \"As\" is ambiguous; it can refer to the passage of time. \"Because\" refers to causation or the reason for something.'
    },
    term: {
        fn: function (text) {
            var positives = ["auto populate", "auto-populate"];
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
        explanation: 'Please use \"autopopulate\" instead.'
    },
    term: {
        fn: function (text) {
            var positives = ["auto-scaling"];
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
        explanation: 'Please use \"autoscaling\" instead.'
    },
    term: {
        fn: function (text) {
            var positives = ["auto-tagging"];
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
        explanation: 'Please use \"autotagging\" instead.'
    },
    term: {
        fn: function (text) {
            var positives = ["autoupdate"];
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
        explanation: 'Don\'t use. Instead, use \"automatically update.\"'
    },
    term: {
        fn: function (text) {
            var positives = ["autoupdate"];
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
        explanation: 'Don\'t use. Instead, use \"automatically update.\"'
    },
    term: {
        fn: function (text) {
            var positives = ["back-end", "back end"];
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
        explanation: 'Please use \"backend\" instead."'
    },
    term: {
        fn: function (text) {
            var positives = ["back-end", "back end"];
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
        explanation: 'Please use \"backend\" instead."'
    },
    backwardsCompatible: {
        fn: function (text) {
            var positives = ["backwards compatible"];
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
        explanation: 'Please use \"backward compatible\" instead."'
    },
    term: {
        fn: function (text) {
            var positives = ["below"];
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
        explanation: 'Don\'t use. Instead, use \"following.\"'
    },
    blackHat: {
        fn: function (text) {
            var positives = ["blackhat", "black hat", "black-hat"];
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
        explanation: 'Don\'t use. Instead, use precise terms for the kind of violation or practice, such as illegal, unethical, or in violation of rules.'
    },
    blind: {
        fn: function (text) {
            var positives = ["blind"];
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
        explanation: 'Avoid using blind to or blind eye to. Instead, use more precise terms like ignore, unaware of, disregard, avoid, or reject.\nAvoid using blind writes. Instead, use a more precise phrase, such as a write operation without a read operation.\nAvoid using blind change or change blindly. Instead, use a more precise phrase such as change without first confirming the value.\nWhen referring to people, use terms like person who is blind, screen reader user (if applicable), person who is visually impaired, person who is low-vision, magnification user (if applicable).'
    },
    builtIn: {
        fn: function (text) {
            var positives = ["built\sin"];
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
        explanation: 'Please use \"built-in\" instead if referring to a feature."'
    },
    checkBox: {
        fn: function (text) {
            var positives = ["check box"];
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
        explanation: 'Please use \"checkbox\" instead."'
    },
    cli: {
        fn: function (text) {
            var positives = ["cli"];
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
        explanation: 'Don\'t use. Instead, use command-line tool or a similar noun.'
    },
    clickOn: {
        fn: function (text) {
            var positives = ["click on"];
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
        explanation: 'Please use \"click\" instead. When the environment is a desktop with a mouse, use click for most targets, such as buttons, links, list items, and radio buttons.'
    },
    clickHere: {
        fn: function (text) {
            var positives = ["click here"];
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
        explanation: 'Don\'t use. Instead use the exact title of the linked-to page, capitalized the same way the title is capitalized. OR A description of the linked-to page, cap\nitalized like ordinary text instead of like a title. Don\'t use a URL as link text. Instead, use the page title or a description of the page. '
    },
    codebase: {
        fn: function (text) {
            var positives = ["code base"];
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
        explanation: 'Please use \"code base\" instead.'
    },
    comprise: {
        fn: function (text) {
            var positives = ["comprise"];
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
        explanation: 'Don\'t use. Instead, use \"consist of,\" \"contain,\" or \"include.\"'
    },
    config: {
        fn: function (text) {
            var positives = ["\\bconfig\\b"];
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
        explanation: 'Avoid when possible. Instead, spell out the full word when it\'s used in a non-code sense: \"configuration\" or \"configuring.\" Use the verbatim code item name when referring to, for example, a data structure or file with that name.'
    },
    cons: {
        fn: function (text) {
            var positives = ["\\bcons\\b"];
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
        explanation: 'Don\'t use. Instead, use something like \"disadvantages.\"'
    },
    cpu: {
        fn: function (text) {
            var positives = ["\\bcpu\\b"];
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
        explanation: 'Please use \"CPU\" instead. All caps. No need to expand the abbreviation on first mention.'
    },
    currently: {
        fn: function (text) {
            var positives = ["currently"];
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
        explanation: 'Don\'t use \"currently\" to imply that a feature might become available in the future, as in \"currently doesn\'t support this feature.\"'
    },
    data: {
        fn: function (text) {
            var positives = ["data are"];
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
        explanation: 'In our usage, \"data\" is singular, not plural. Say the \"data is,\" not the \"data are.\" Also, in our usage, data is a mass noun, not a count noun; for example, say \"less data\" rather than \"fewer data.\"'
    },
    deepLinking: {
        fn: function (text) {
            var positives = ["deep-linking"];
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
        explanation: 'Please use \"deep linking\" instead. However, if it would work to replace with \"linking,\" then do that.'
    },
    desire: {
        fn: function (text) {
            var positives = ["desire"];
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
        explanation: 'Don\'t use. Instead, use a word like \"want\" or \"need.\"'
    },
    disable: {
        fn: function (text) {
            var positives = ["disable"];
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
        explanation: 'Don\'t use \"disabled\" to describe something that\'s broken. When describing a user action or the state of a UI element, use a more precise term where possible, like \"turn off,\" \"inactive,\" \"deactivated,\" or \"deselect.\"'
    },
    documentation: {
        fn: function (text) {
            var positives = ["\\bdoc\\b", "\\bdocs\\b", "article", "topic"];
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
        explanation: 'Within a document, use \"in this document,\" and not \"in this article\" or \"in this topic.\" It\'s okay to use \"in this tutorial\" or \"in this codelab.\"'
    },
    dropdown: {
        fn: function (text) {
            var positives = ["dropdown"];
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
        explanation: 'In most cases, you can omit \"drop-down\" in favor of \"list\" or \"menu.\" If the omission results in ambiguity, then include \"drop-down\" as a modifier.'
    },
    dropdown: {
        fn: function (text) {
            var positives = ["dropdown"];
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
        explanation: 'In most cases, you can omit \"drop-down\" in favor of \"list\" or \"menu.\" If the omission results in ambiguity, then include \"drop-down\" as a modifier.'
    },
    eg: {
        fn: function (text) {
            var positives = ["e.g."];
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
        explanation: 'Don\'t use. Instead, use phrases like \"for example\" or \"such as.\" Too many people mix up \"e.g.\" and \"i.e.\"'
    },
    endpoint: {
        fn: function (text) {
            var positives = ["end point"];
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
        explanation: 'Please use \"endpoint\" instead.'
    },
    etc: {
        fn: function (text) {
            var positives = ["\\betc"];
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
        explanation: 'Avoid both \"etc.\" and and \"so on\" wherever possible, but if you really need to use one, use \"etc.\" Always include the period, even if a comma follows immediately after.'
    },
    filename: {
        fn: function (text) {
            var positives = ["file name"];
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
        explanation: 'Please use \"filename\" instead.'
    },
    filesystem: {
        fn: function (text) {
            var positives = ["file system"];
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
        explanation: 'Please use \"filesystem\" instead.'
    },
    firstClass: {
        fn: function (text) {
            var positives = ["first-class", "first class"];
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
        explanation: 'Don\'t use socially-charged terms for technical concepts where possible. Instead, consider terms such as \"core feature,\" \"built-in,\" \"top-level.\"'
    },
    forInstance: {
        fn: function (text) {
            var positives = ["for instance"];
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
        explanation: 'Avoid when possible. Instead, use \"for example\" or \"such as.\"'
    },
    frontend: {
        fn: function (text) {
            var positives = ["front-end", "front end"];
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
        explanation: 'Please use \"frontend\" instead.'
    },
    grandfather: {
        fn: function (text) {
            var positives = ["grandfather"];
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
        explanation: 'Don\'t use to refer to something that is allowed to violate a rule because it predates the rule. Instead, use an adjective like \"legacy\" or \"exempt\" or a verb like \"made an exception.\"'
    },
    grandfather: {
        fn: function (text) {
            var positives = ["grandfather"];
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
        explanation: 'Don\'t use to refer to something that is allowed to violate a rule because it predates the rule. Instead, use an adjective like \"legacy\" or \"exempt\" or a verb like \"made an exception.\"'
    },
    grandfather: {
        fn: function (text) {
            var positives = ["grandfather"];
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
        explanation: 'Don\'t use to refer to something that is allowed to violate a rule because it predates the rule. Instead, use an adjective like \"legacy\" or \"exempt\" or a verb like \"made an exception.\"'
    },
    hamburger: {
        fn: function (text) {
            var positives = ["hamburger"];
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
        explanation: 'Don\'t use. Instead use the aria-label for that particular icon. For example, \"Menu.\"'
    },
    hamburger: {
        fn: function (text) {
            var positives = ["hamburger"];
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
        explanation: 'Don\'t use. Instead use the aria-label for that particular icon. For example, \"Menu.\"'
    },
    health: {
        fn: function (text) {
            var positives = ["health"];
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
        explanation: 'Use with caution. When describing an action taken for a computer system, only use the term \"health check\" if this is the term that appears in the interface. Be certain to remove any ambiguity regarding whether the term refers to health in the medical sense.\n\nUse detailed, non-figurative language as much as possible, such as referring to a node \"being responsive\" instead of referring to a node \"being healthy.\"'
    },
    hit: {
        fn: function (text) {
            var positives = ["\\bhit\\b"];
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
        explanation: 'Don\'t use as a synonym for \"click,\" \"press,\" or \"type.\"'
    },
    housekeeping: {
        fn: function (text) {
            var positives = ["housekeeping", "house keeping", "house-keeping"];
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
        explanation: 'Don\'t use. Use less figurative and more precise terms, such as \"maintenance\" and \"cleanup.\"'
    },
    hover: {
        fn: function (text) {
            var positives = ["\\bhover\\b"];
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
        explanation: 'Don\'t use. Instead use \"hold the pointer over.\"'
    },
    ie: {
        fn: function (text) {
            var positives = ["i.e."];
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
        explanation: `Don\'t use. Instead, use phrases like *that is*. Too many people mix up \"e.g.\" and \"i.e.\"`
    },


}