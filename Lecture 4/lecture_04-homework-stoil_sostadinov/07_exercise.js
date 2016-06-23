/**
 * Lecture 4 Homework
 * Exercise 7
 *
 * Да се изведат на екрана всички числа от 1 до N, които се делят на 3 и 7 едновременно.
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

console.log( 'Numbers divisible both on 3 and 7 at the same time are:' );
for ( let i = 1; i <= number1; ++i ) {
    if ( ( i % 3 == 0 ) && ( i % 7 == 0 ) ) {
        console.log( i );
    }
}

