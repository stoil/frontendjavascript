/**
 * Lecture 6 Homework
 * Exercise 7
 *
 * Write a function that returns the index of the first element in array that is bigger than its neighbors, or -1, if there’s no such element.
 * Use the function from the previous exercise.
 *
 */

"use strict";
function checkElemInArr( elemIndex, numbersArray = [6, 4, 3, 6, 2, 1, 6, 9] ) {
    if( numbersArray[elemIndex] > numbersArray[elemIndex - 1] && numbersArray[elemIndex] > numbersArray[elemIndex + 1] ) {
        return true;
    }
}
function firstElemBiggerThanNeighbours( array = [6, 4, 3, 6, 2, 1, 6, 9] ) {
    for ( let i = 1; i < array.length - 1; ++i ) {
        if ( checkElemInArr(i, array) ) {
            return i;
        }
    }
    return -1;
}
console.log( firstElemBiggerThanNeighbours() );