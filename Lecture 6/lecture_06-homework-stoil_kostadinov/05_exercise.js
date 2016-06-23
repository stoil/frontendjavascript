/**
 * Lecture 6 Homework
 * Exercise 5
 *
 * Write a function that counts how many times given number appears in given array.
 * Write a test function to check if the function is working correctly.
 *
 */

"use strict";

function countNumber( numberToCount, numbersArr = [6, 4, 3, 6, 2, 1, 6, 9] ) {
    let counter = 0;
    for ( let i of numbersArr ) {
        if ( i == numberToCount ) {
            counter++;
        }
    }
    return console.log( 'The number of times "' + numberToCount + '" appears in this array of numbers "{' + numbersArr.join( ', ' ) + '}" is ' + counter );
}

countNumber( 6 );

function test() {
    var numberToCount = 6;
    var numbersArr = [6, 4, 3, 6, 2, 1, 6, 9];

    return countNumber( numberToCount, numbersArr );
}