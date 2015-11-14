// programmatic usage
var Linter = require('./linter').linter

var opts = require('./options.js')

module.exports = new Linter(opts)
