/**
 * Lecture 5 Homework
 * Exercise 5
 *
 * Write a script that finds the maximal sequence of equal elements in an array.
 * Example: {2, 1, 1, 2, 3, 3, 2, 2, 2, 1}  {2, 2, 2}.
 *
 */

"use strict";

/**
 * Declare new variables for:
 * currentCounter - will count the biggest sequence,
 * finalCount - will keep the final best result,
 * finalElement - will keep the element of the biggest sequence,
 * currentIndex - will keep the temp index for the secondary loop
 *
 */
var arr = [2, 2, 2, 5, 3, 7, 7, 9, 9, 9, 9, 1, 1, 1, 1, 1, 1];

var currentCount = 1,
    finalCount = 1,
    currentElement = 0,
    finalElement = 0,
    currentIndex = '';

for ( var i = 0; i < arr.length - 1; ) {
    currentCount = 1;
    currentIndex = i;
    while ( arr[currentIndex] == arr[currentIndex + 1] ) {
        currentCount++;
        currentIndex++;
        currentElement = arr[i];
    }
    i += currentCount;
    if ( currentCount>finalCount ) {
        finalCount = currentCount;
        finalElement = currentElement;
    }
}
if ( finalCount == 1 ) {
    console.log( "The longest sequence of equal elements in the array is {" + arr[0] + "}" );
}else {
    var finalArr = [];
    for ( let j = 0; j < finalCount; j++ ) {
       finalArr.push( finalElement );
    }
    console.log( "The longest sequence of equal elements in the array is {" + finalArr.join() + "}" );
}