'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(str){
    return str.substring(0,2);
}

function keepLast(str){
    return str.slice(-2);
}

function keepFirstLast(str){
    return str.substring(3,5);
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('salut'), 'sa');

assert.strictEqual(keepLast('salut'), 'ut');

assert.strictEqual(keepFirstLast('salut'), 'ut')

/* End of tests */
