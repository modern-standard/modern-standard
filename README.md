# JavaScript Modern Standard Style
[![travis][travis-image]][travis-url]

[travis-image]: https://travis-ci.org/modern-standard/modern-standard.svg?branch=master
[travis-url]: https://travis-ci.org/modern-standard/modern-standard
[npm-image]: https://img.shields.io/npm/v/standard.svg?style=flat
[npm-url]: https://npmjs.org/package/standard
[downloads-image]: https://img.shields.io/npm/dm/standard.svg?style=flat
[downloads-url]: https://npmjs.org/package/standard

### One Style to Rule Them All

No decisions to make. No `.eslintrc`, `.jshintrc`, or `.jscsrc` files to manage. It just
works.

This module saves you (and others!) time in two ways:

- **No configuration.** The easiest way to enforce consistent style in your project. Just
  drop it in.
- **Catch style errors before they're submitted in PRs.** Saves precious code review time
  by eliminating back-and-forth between maintainer and contributor.

This is a linter for the future, based on the [standard linter]. It expects to be run within a babel environment, using the latest available babel syntax.

[standard linter]: https://github.com/feross/standard

## Rule Differences from Standard

* Always require parens for arrow functions, [arrow-parens]: always.
* Require commas in a multi-line block, [comma-dangle]: "always-multiline".
* Arrow functions everywhere, [prefer-arrow-callback].
* Prefer spread instead of .apply where possible, [prefer-spread].
* Template strings, [prefer-template].
* Require a yield statement in generators, [require-yield].

[arrow-parens]: http://eslint.org/docs/rules/arrow-parens.html
[comma-dangle]: http://eslint.org/docs/rules/comma-dangle.html
[object-shorthand]: http://eslint.org/docs/rules/object-shorthand.html
[prefer-arrow-callback]: http://eslint.org/docs/rules/prefer-arrow-callback.html
[prefer-spread]: http://eslint.org/docs/rules/prefer-spread.html
[prefer-template]: http://eslint.org/docs/rules/prefer-template.html
[require-yield]: http://eslint.org/docs/rules/require-yield.html

## Methodology Differences from Standard

* We will freely update rules based on current best practices. Becuase of this we recommend that you lock down the current version of modern-standard.
* We are currently only targeting the latest javascript syntax, generally this code is transpiled by [babel].
* We want to move faster and be more receptive to community issues and contributions.
* Everything is under one organization, and all linting code is in a single repo. This makes it much easier for contributors.
* This is an experiment and we're happy if standard adopts these rules or if this repository is forked.

[babel]: http://babeljs.io/


## Install

```bash
npm install modern-standard
```

## Text editor plugins

First, install modern-standard. Then, install the appropriate plugin for your editor:

#### [Sublime Text](https://www.sublimetext.com/)

[SublimeLinter-contrib-modern-standard][SublimeLinter-contrib-modern-standard] is currently under construction and should be published in package control soon.

[SublimeLinter-contrib-modern-standard]: https://github.com/modern-standard/ide-plugin-sublime


#### [Atom](https://atom.io)

[ide-plugin-atom][ide-plugin-atom] can be found here: https://atom.io/packages/modern-standard-ide-plugin-atom

[ide-plugin-atom]: https://github.com/modern-standard/ide-plugin-atom
