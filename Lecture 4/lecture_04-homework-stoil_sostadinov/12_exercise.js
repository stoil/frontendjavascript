/**
 * Lecture 4 Homework
 * Exercise 12
 *
 * Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects
 *
 */

"use strict";

/**
 * Check if there is remainder when you divide
 *
 */

var windowObj = Object.getOwnPropertyNames( window );
var documentObj = Object.getOwnPropertyNames( document );
var navigatorObj = Object.getOwnPropertyNames( navigator );

// First Variant
var min = windowObj[0];
var max = windowObj[0];
for ( let i of windowObj  ) {
    if ( min > i ) {
        min = i;
    }
    if ( max < i ) {
        max = i;
    }
}
 console.log( 'The biggest lexicographically object property in window is: ' + max  + ' and the smallest one is ' + min );

// second Variant
var sortedObj = windowObj.sort();
var lastIndex = sortedObj.length - 1;
console.log( 'The biggest lexicographically object property in window is: ' + sortedObj[lastIndex]  + ' and the smallest one is ' + sortedObj[0] );