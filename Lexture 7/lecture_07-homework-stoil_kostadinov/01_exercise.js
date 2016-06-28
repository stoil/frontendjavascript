/**
 * Lecture 7 Homework
 * Exercise 1
 *
 * Write a JavaScript function reverses string and returns it
 * Example: "sample" -> "elpmas".
 *
 */

"use strict";
var string = 'Elephant';
function reverseStr( string ) {
    string = string || 'Test';
    return string.split( '' ).reverse().join( '' );
}
console.log( 'The reversed version of the string "' + string + '" is "' + reverseStr( string ) + '"' );