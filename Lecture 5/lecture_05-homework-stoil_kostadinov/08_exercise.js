/**
 * Lecture 5 Homework
 * Exercise 8
 *
 * Write a program that finds the most frequent number in an array.
 * Example: {4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3} -> 4 (5 times)
 *
 */

"use strict";
var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];

var counter = 1,
    finalCount = 1,
    tempIndex = '',
    currentElement = '',
    finalElement = '',
    tempVar = '';

for ( let i = 0; i < arr.length; ++i ) { // 1
    counter = 1; // 1
    tempIndex = i + 1; // 1
    for ( let j = tempIndex; j < arr.length; ++j ) { // 12
        if ( arr[i] == arr[j] ) {
            counter++; // 5
            currentElement = arr[i]; // 4
        }
    }
    if ( counter > finalCount ) {
        finalCount = counter; // 5
        finalElement = currentElement; // 4
    }
}

console.log( 'The most frequent number in this sequence { ' + arr.join( ', ' ) + '} is "' + finalElement + '" (' + finalCount + ' times)' );