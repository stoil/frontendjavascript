/**
 * Lecture 5 Homework
 * Exercise 3
 *
 * Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5
 *
 */

"use strict";


var arr = new Array(20);
var newArr = [];
for ( let i = 0; i < arr.length; ++i ) {
    var index = ( i + 1 ) * 5;
    newArr.push( index );
}
console.log( newArr );