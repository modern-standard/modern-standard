# JavaScript Babel Standard Style
[![travis][travis-image]][travis-url]

[travis-image]: https://travis-ci.org/standard-babel-lint/standard-babel-lint.svg?branch=master
[travis-url]: https://travis-ci.org/standard-babel-lint/standard-babel-lint
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

This is a linter for the future, based on the [standard linter]. It expects to be run within 

[standard linter]: https://github.com/feross/standard

## Install

```bash
npm install standard-babel-lint
```

## Rule Differences from Standard

* Always require parent for arrow functions.
