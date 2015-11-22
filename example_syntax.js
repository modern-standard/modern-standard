/**
 * Example of valid syntax /w modern-standard.
 */

// Async function support.
async function foo () {
  // Requires await
  await console.log('Called into an async function.')
}

(async function() {
  var result = await foo()
  console.log(result)
}())

// ------------------------------------------------

// Prefer dangling commas
// Fails:
/* eslint-disable */
var commaDangleFailure = {
  foo: true
}
/* eslint-enable */

// Passes:
var commaDangleSuccess = {
  foo: true,
}
commaDangleSuccess.doSomething()

// ------------------------------------------------

// Prefer arrow functions.
let fatArrow = () => {
  console.log('I love fat arrows.')
}
fatArrow()

// ------------------------------------------------

// Object shorthand.
// Fails:
/* eslint-disable */
var myKey = "my value"
var objectShorthandFailure = {
  myKey: myKey,
}
/* eslint-enable */

// Passes:
var objectShorthandPasses = {
  myKey,
}
objectShorthandPasses.doSomething()
