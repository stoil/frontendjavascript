/**
 * Lecture 7 Homework
 * Exercise 2
 *
 * Write a JavaScript function to check if in a given expression the brackets are put correctly.
 * Example of correct expression: ((a+b)/5-d).
 * Example of incorrect expression: )(a+b)).
 *
 */

"use strict";

function reverseStr( string ) {
    string = string || 'Test';
    var strArr = string.split('');
    strArr.reverse();
    return strArr.join('');
}

console.log( reverseStr('Hello') );