# `quality-docs-fork`

Fork of [`Quality Docs`](https://github.com/sparkartgroup/quality-docs), a CLI tool to check the quality of writing in your project's markdown or plain text documentation.

[`Unified`](https://github.com/unifiedjs/unified) - interface for parsing, inspecting, transforming, and serializing content through syntax trees.

This tool uses [`retext`](https://github.com/wooorm/retext) to check the quality of writing in your project's documentation using these plugins;

- [`retext-equality`](https://github.com/wooorm/retext-equality) warns on insensitive, inconsiderate language.
- [`retext-intensify`](https://github.com/wooorm/retext-intensify) warns on filler, weasel and hedge words.
- [`remark-lint`](https://github.com/wooorm/remark-lint) checks for proper markdown formatting.
- [`retext-readability`](https://github.com/wooorm/retext-readability) checks the reading level of the whole document.
    - This project measures readability in text with several formulas: Dale–Chall, Automated Readability, Coleman–Liau, Flesch, Gunning fog, SMOG, and Spache.
- [`retext-simplify`](https://github.com/wooorm/retext-simplify) warns on complicated phrases and checks for simpler alternatives.
- [`retext-spell`](https://github.com/wooorm/retext-spell) checks spelling against a US English dictionary and [custom dictionary](#custom-dictionary).
- [`write-good`](https://github.com/btford/write-good)
- [`remark-validate-links`](https://github.com/remarkjs/remark-validate-links) validates that Markdown links and images reference existing local files and headings.
- [`remark-lint-no-dead-urls`](https://github.com/remarkjs/remark-validate-links) ensures that external URLs in your Markdown are alive.
- [`retext-google-styleguide`](https://github.com/gaurav-nelson/retext-google-styleguide) 
- [`retext-syntax-urls`](https://github.com/retextjs/retext-syntax-urls) classifies url-like values (example.com, index.html, www.alpha.bravo) as syntax, not natural language.
- [`retext-repeated-words`](https://github.com/retextjs/retext-repeated-words) check for repeated words.
  - Doesn’t warn for some words which do occur twice (the best exhibition they had had since)
  - Doesn’t warn for initialisms (D. D. will pop up with…)
  - Doesn’t warn for capitalised words (Duran Duran…)
- [`retext-indefinite-article`](https://github.com/retextjs/retext-indefinite-article) check if indefinite articles (`a` and `an`) are used correctly.
- [`retext-assuming`](https://github.com/davidhund/retext-assuming) Check for unhelpful ‘assuming’ phrases such as 'just', 'simply' or 'obviously'

To Do
- use `remark-lint-no-dead-urls` to validate external links while ignoring example URLs
