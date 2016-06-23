/**
 * Lecture 7 Homework
 * Exercise 1
 *
 * Write a JavaScript function reverses string and returns it
 * Example: "sample" -> "elpmas".
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