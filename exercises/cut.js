'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

function cutFirst(str){
    return str.slice(2);
}
function cutLast(str){
    return str.slice(0, -2);
}
function cutFirstLast(str){
    let resultat = str.slice(2);
    return resultat.slice(0,-2);
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst('salut'), 'lut')

assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast('salut'), 'sal')

assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast('salut'), 'l')



// End of tests */
