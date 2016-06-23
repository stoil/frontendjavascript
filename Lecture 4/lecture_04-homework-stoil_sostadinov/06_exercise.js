/**
 * Lecture 4 Homework
 * Exercise 6
 *
 * Да се въведе число от потребителя и да се изведе сбора на всички числа между 1 и въведеното число.
 * Въдете число: 7 | Резултата е 28
 *
 */

"use strict";

// Prompt for number 1
var number1 = parseInt( prompt( 'Please enter a number!' ), 10 );

// check if it is a number, if not, ask again
if ( isNaN( number1 ) ) {
    number1 = parseInt( prompt( 'Please enter a real number! String won\'t work'  ), 10 );
}else {
    console.log( 'Number is ' + number1 );
}

var sum = 0;
if ( number1 > 1 ) {
    console.log( 'The sum of all numbers between 1 and ' + number1 + ' is: ' );
    for ( let i = 1; i <= number1; ++i ) {
        sum += i;
    }
    console.log( sum );
}else {
    console.log( 'The entered number is either equal or less than 1. Please enter a bigger number!' );
}
