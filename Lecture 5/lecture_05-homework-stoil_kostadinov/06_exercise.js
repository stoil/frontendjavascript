/**
 * Lecture 5 Homework
 * Exercise 6
 *
 * Write a script that finds the maximal increasing sequence in an array.
 * Example: {3, 2, 3, 4, 2, 2, 4} -> {2, 3, 4}
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
var arr = [2, 3, 4, 5, 6, 7, 3, 4, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8];

var currentCount = 1,
    finalCount = 1,
    currentElement = 0,
    finalElement = 0,
    currentIndex = '';

for ( var i = 0; i < arr.length - 1; ) {
    currentCount = 1;
    currentIndex = i;
    while ( arr[currentIndex] + 1 ==  arr[currentIndex + 1] ) {
        currentCount++; // 2
        currentIndex++; // 1
        currentElement = arr[i]; // 2
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
    for ( let j = finalElement; j < ( finalCount + finalElement ); j++ ) {
       finalArr.push( j );
    }
    console.log( "The longest sequence of equal elements in the array is {" + finalArr.join() + "}" );
}