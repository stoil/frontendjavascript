/**
 * Lecture 6 Homework
 * Exercise 2
 *
 * Write a function that reverses the digits of given decimal number.
 * Example: 256 -> 652
 *
 */

"use strict";


function digitName( number ) {
    let roundedNumber = Math.round( number );
    let numberArr = ( '' + roundedNumber ).split( '' );
    let reversedNumber = parseInt( ( numberArr.reverse() ).join( '' ), 10 );

    return console.log( 'The reversed version of this number "' + roundedNumber + '" is ' + reversedNumber );
}

digitName( 356 );