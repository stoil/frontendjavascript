/**
 * Lecture 5 Homework
 * Exercise 7
 *
 * Sorting an array means to arrange its elements in increasing order.
 * Write a script to sort an array. Use the "selection sort" algorithm:
 * Find the smallest element, move it at the first position, find the smallest from the rest,
 * move it at the second position, etc.
 * Hint: Use a second array
 *
 */

"use strict";

var arr = [18, 333, 226, 19, 65];

var currentSmallest = arr[0],
    tempIndex = '',
    indexOfSmallest = 0,
    enteredInConditional = false,
    tempVar = '';

for ( let i = 0; i < arr.length; i++ ) {
    currentSmallest = arr[i];
    tempIndex = i+1;
    indexOfSmallest = 0;
    enteredInConditional = false;
    while ( tempIndex < arr.length ) {
        if ( currentSmallest > arr[tempIndex] ) {
            currentSmallest = arr[tempIndex];
            indexOfSmallest = tempIndex;
            tempIndex++;
            enteredInConditional = true;
        }
        else {
            tempIndex++;
        }
    }
    if ( enteredInConditional ) {
        tempVar = arr[i];
        arr[i] = currentSmallest;
        arr[indexOfSmallest] = tempVar;
    }


}
console.log( '{' + arr.join( ', ' ) + '}' );