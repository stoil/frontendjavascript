/**
 * Lecture 5 Homework
 * Exercise 5
 *
 * Write a script that finds the maximal sequence of equal elements in an array.
 * Example: {2, 1, 1, 2, 3, 3, 2, 2, 2, 1}  {2, 2, 2}.
 *
 */

"use strict";

var arr = [2, 2, 2, 5, 3, 7, 7, 9, 9, 9, 9, 1, 1, 1, 1,1];

var currentCount = 1,
    finalCount = 1,
    repeatArr = [],
    allSequences = [];

for ( let i = 0; i < arr.length - 1; ++i ) {
    if ( arr[i] == arr[i + 1] ) {
        currentCount++;
    }else {
        currentCount = 1;
    }
    if ( currentCount > finalCount ) {
        finalCount = currentCount;
        repeatArr = [];
    }
    if ( currentCount == finalCount ) {
        repeatArr.push(arr[i]);
    }
}
for ( let i = 0; i < repeatArr.length; ++i ) {
    let currentSequence = [];
    for ( let j = 0; j < finalCount; ++j ) {
        currentSequence.push(repeatArr[i]); 
    }
    allSequences.push('{' + currentSequence.join() + '}'); // ["1,1,1,1"]
}
if ( allSequences.length == 1 ) {
    console.log( "The longest sequence of equal elements in the array is: " + allSequences.join() );
}else {
    console.log( "The longest sequences of equal elements in the array are " + allSequences.join(' ') );
}
