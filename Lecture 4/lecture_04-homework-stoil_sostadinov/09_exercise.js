/**
 * Lecture 4 Homework
 * Exercise 9
 *
 * Започвайки от 3, да се изведат на екрана първите N числа които се делят на 3.
 * Числата да са разделени със запетая.
 *
 * Въведете N: 22
 * Резултат: 3,6,9,12,15,18,21
 *
 */

"use strict";

// Prompt for number 1
var number1 = parseInt( prompt( 'Please enter a number!' ), 10 );

// check if it is a number, if not, ask again
if ( isNaN( number1 ) ) {
    number1 = parseInt( prompt( 'Please enter a real number! String won\'t work'  ), 10 );
}else {
    console.log( 'Entered number is: ' + number1 );
}

/**
 * Loop from number 3 to the entered number,
 * check each number if it is divisible by 3
 * and if it is print it
 */

var array = [];

for ( let i = 3; i <= number1; ++i ) {
    if ( i % 3 == 0 ) {
        array.push( i );
    }
}

// Print array of numbers
console.log( 'Numbers divisible by 3 are: ' + array.join( ', ' ) );

