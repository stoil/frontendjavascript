/**
 * Lecture 5 Homework
 * Exercise 9
 *
 * Write a program that finds the index of given element in a sorted array
 * of integers by using the binary search algorithm (find it in Wikipedia).
 *
 */

"use strict";
var arr = [1, 4, 2, 3, 9];
var searchElement = 2;

arr = arr.sort( function( a, b ) {
    return a - b;
} );

var arrStart = 0;
var arrMiddle = Math.floor( arr.length / 2 );
var arrEnd = arr.length - 1;
var index = 0;

console.log( 'The sorted array is {' + arr.join( ', ' ) + '}' );
while ( true ) {

    if( searchElement < arr[arrMiddle] ) {
        arrEnd = arrMiddle;
        arrMiddle = Math.floor((arrStart + arrEnd) / 2);
        
    }else if ( searchElement > arr[arrMiddle] ) {
        arrStart = arrMiddle;
        arrMiddle = Math.floor((arrStart + arrEnd) / 2);
    }else {
        console.log( 'The index of the Element (' + searchElement + ') is ' + arrMiddle );
        break;
    }
    
    if ( arrStart == arrEnd ) {
        console.log('The index of the Element ' + searchElement + ' is ' + arrStart );
        break;
    }
    else if ( searchElement == arr[arrStart] ) {
        console.log('The index of the Element ' + searchElement + ' is ' + arrStart );
        break;
    }
    else if ( searchElement == arr[arrEnd] ) {
        console.log('The index of the Element ' + searchElement + ' is ' + arrEnd );
        break;
    }
}