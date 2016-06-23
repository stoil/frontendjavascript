/*
 * Lecture 3 Homework
 * Exercise 2
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
    console.log( 'Number 1 = ' + number1 );
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
    console.log( 'Number 2 = ' + number2 );
}

// Addition of number 1 and number 2
var addition = number1 + number2;

// Subtraction of number 1 and number 2
var subtraction = number1 - number2;

// Multiplication of number 1 and number 2
var multiplication = number1 * number2;

// Remainder of division between number 1 and number 2
var remainder = number1 % number2;

// Printing results

console.log( number1 + ' + ' + number2 + ' = ' + addition );
console.log( number1 + ' - ' + number2 + ' = ' + subtraction );
console.log( number1 + ' * ' + number2 + ' = ' + multiplication );
console.log( number1 + ' % ' + number2 + ' = ' + remainder );



/*

// Same Exercise but with floating point numbers
// Prompt for number 1
var number1 = parseFloat( prompt( 'Please enter a Number 1 value in the field below!' ) );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( number1 ) ) {
    number1 = parseFloat( prompt( 'You can only enter a real number! Strings won\'t work' ) );
}else if ( ( number1 == '' ) || ( number1 == null ) ) {
    number1 = parseFloat( prompt( 'You can not leave the box empty! Please enter a number value' ) );
}else {
    console.log( 'Number 1 = ' + number1 );
}

// Prompt for number 2
var number2 = parseFloat( prompt( 'Please enter a Number 2 value in the field below!' ) );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( number2 ) ) {
    number2 = parseFloat( prompt( 'You can only enter a real number! Strings won\'t work' ) );
}else if ( ( number2 == '' ) || ( number2 == null ) ) {
    number2 = parseFloat( prompt( 'You can not leave the box empty! Please enter a number value' ) );
}else {
    console.log( 'Number 2 = ' + number2 );
}

// Addition of number 1 and number 2
var addition = number1 + number2;

// Subtraction of number 1 and number 2
var subtraction = number1 - number2;

// Multiplication of number 1 and number 2
var multiplication = number1 * number2;

// Remainder of division between number 1 and number 2
var remainder = number1 % number2;


// Printing results
console.log( number1 + ' + ' + number2 + ' = ' + addition );
console.log( number1 + ' - ' + number2 + ' = ' + subtraction );
console.log( number1 + ' * ' + number2 + ' = ' + multiplication );
console.log( number1 + ' % ' + number2 + ' = ' + remainder );*/
