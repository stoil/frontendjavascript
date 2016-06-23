/**
 * Lecture 4 Homework
 * Exercise 5
 *
 * Да се въведат от потребителя 2 числа. И да се изведат на екрана всички числа намиращи се между тях.
 * Въведете първото число:
 * 12
 * Въведете второто число:
 * 15
 * 12 13 14 15
 *
 */

"use strict";

// Prompt for number 1
var number1 = parseInt( prompt( 'Please enter number 1' ), 10 );

// check if it is a number, if not, ask again
if ( isNaN( number1 ) ) {
    number1 = parseInt( prompt( 'Please enter a real number! String won\'t work'  ), 10 );
}else {
    console.log( 'First number is ' + number1 );
}

// Prompt for number 1
var number2 = parseInt( prompt( 'Please enter number 2' ), 10 );

// check if it is a number, if not, ask again
if ( isNaN( number2 ) ) {
    number2 = parseInt( prompt( 'Please enter a real number! String won\'t work'  ), 10 );
}else {
    console.log( 'Second number is ' + number2 );
}

/**
 * Check if number 1 is bigger than number 2
 * and run appropriate loop
 */
if ( number1 > number2 ) {
    console.log( 'Numbers between ' + number2 + ' and ' + number1 + ' are: ' );
    for ( let i = number2; i < number1; ++i ) {
        console.log( i );
    }
}else if ( number1 < number2 ) {
    console.log( 'Numbers between ' + number1 + ' and ' + number2 + ' are: ' );
    for ( let i = ++number1; i < number2; ++i ) {
        console.log( i );
    }
}else {
    console.log( 'Numbers are equal.' );
}
