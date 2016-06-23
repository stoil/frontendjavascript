/**
 * Lecture 6 Homework
 * Exercise 6
 *
 * Write a function that checks if the element at given position in given array of integers is bigger than its two neighbors (when such exist).
 *
 */

"use strict";

function checkElemInArr( elemIndex, numbersArray = [6, 4, 3, 6, 2, 1, 6, 9] ) {
    if( numbersArray[elemIndex] > numbersArray[elemIndex - 1] && numbersArray[elemIndex] > numbersArray[elemIndex + 1] ) {
        return console.log(  'The element at position "' + elemIndex + '" in this array of numbers "{' + numbersArray.join( ', ' ) + '}" is bigger than it\'s neighbours!'  );
    }else {
        return console.log(  'The element at position "' + elemIndex + '" in this array of numbers "{' + numbersArray.join( ', ' ) + '}" is not bigger than it\'s neighbours!'  );
    }
}

checkElemInArr( 3 );