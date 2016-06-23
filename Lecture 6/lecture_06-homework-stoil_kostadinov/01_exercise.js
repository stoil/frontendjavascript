/**
 * Lecture 6 Homework
 * Exercise 1
 *
 * Write a function that returns the last digit of given integer as an English word.
 * Examples: 512 -> "two", 1024 -> "four", 12309 -> "nine"
 *
 */

"use strict";


function digitName( number ) {
    let roundedNumber = Math.round( number );
    let numberArr = ( '' + roundedNumber ).split( '' );
    let lastDigit = parseInt( numberArr[numberArr.length-1], 10 );
    let digitWord = '';
    switch( lastDigit ) {
        case 1 : digitWord = 'One'; break;
        case 2 : digitWord = 'Two'; break;
        case 3 : digitWord = 'Three'; break;
        case 4 : digitWord = 'Four'; break;
        case 5 : digitWord = 'Five'; break;
        case 6 : digitWord = 'Six'; break;
        case 7 : digitWord = 'Seven'; break;
        case 8 : digitWord = 'Eight'; break;
        case 9 : digitWord = 'Nine'; break;
        default : console.log( 'NaN Please provide a real number!' );
    }
    return console.log( 'The name of the last digit of this number "' + roundedNumber + '" is ' + digitWord );
}

digitName( -1024.3 );