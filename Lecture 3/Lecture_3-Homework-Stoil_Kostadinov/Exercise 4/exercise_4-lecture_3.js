/*
 * Lecture 3 Homework
 * Exercise 4
 * Author: Stoil Kostadinow <s.k.kostadinov@gmail.com>
 */

"use strict";
// Prompt for number 1
var number1 = parseInt( prompt( 'Please enter a Number 1 value in the field below!' ), 10 );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( number1 ) ) {
    number1 = parseInt( prompt( 'You can only enter a real number! Strings won\'t work' ), 10 );
}else if ( ( number1 == '' ) || ( number1 == null ) ) {
    number1 = parseInt( prompt( 'You can not leave the box empty! Please enter a number value' ), 10 );
}else {
    console.log( 'A = ' + number1 );
}

// Prompt for number 2
var number2 = parseInt( prompt( 'Please enter a Number 2 value in the field below!' ), 10 );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( number2 ) ) {
    number2 = parseInt( prompt( 'You can only enter a real number! Strings won\'t work' ), 10 );
}else if ( ( number2 == '' ) || ( number2 == null ) ) {
    number2 = parseInt( prompt( 'You can not leave the box empty! Please enter a number value' ), 10 );
}else {
    console.log( 'B = ' + number2 );
}

// checking which number is bigger
// and printing the results
if ( number1 > number2 ) {
    console.log( number2 + ', ' + number1 );
}else {
    console.log( number1 + ', ' + number2 );
}
