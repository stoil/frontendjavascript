/**
 * Lecture 4 Homework
 * Exercise 11
 *
 * Въведете число от клавиатурата и определете дали е просто.
 * Просто число е това което е по-голямо от 1 и се дели САМО на 1 и на себе си.
 *
 */

"use strict";

// Prompt for number 1
var number1 = parseInt( prompt( 'Please enter number 1!' ), 10 );

// check if it is a number, if not, ask again
if ( isNaN( number1 ) ) {
    number1 = parseInt( prompt( 'Please enter a real number! String won\'t work'  ), 10 );
}else {
    console.log( 'Entered number is: ' + number1 );
}

/**
 * Check if there is remainder when you divide
 *
 */

var divider = 2;
var maxDivider = Math.sqrt( number1 );
var isPrime = true;
if ( number1 <= 2 ) {
    console.log( 'Please enter number bigger than 2! 1 is not a prime and number 2 is prime.' );
}else {
    while ( isPrime && ( divider <= maxDivider ) ) {
        if ( number1 % divider == 0 ) {
            isPrime = false;
            console.log( number1 + ' is not a prime!' );
        }else {
            console.log( number1 + ' is prime!' );
        }
        divider++;
    }

}


