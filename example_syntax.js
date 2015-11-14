/**
 * Example of valid syntax /w standard-babel-lint.
 */

// Async function support.
async function foo () {
  console.log('Called into an async function.')
}

(async function() {
  var result = await foo()
  console.log(result)
}())

// Prefer arrow functions.
let fatArrow = () => {
  console.log('I love fat arrows.')
}
fatArrow()
