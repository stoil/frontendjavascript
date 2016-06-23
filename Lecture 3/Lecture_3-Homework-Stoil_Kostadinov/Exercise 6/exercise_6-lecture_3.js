/*
 * Lecture 3 Homework
 * Exercise 6
 * Author: Stoil Kostadinow <s.k.kostadinov@gmail.com>
 */

"use strict";
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
    console.log( 'a1 = ' + number1 );
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
    console.log( 'a2 = ' + number2 );
}

// Prompt for number 3
var number3 = parseFloat( prompt( 'Please enter a Number 3 value in the field below!' ) );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( number3 ) ) {
    number3 = parseFloat( prompt( 'You can only enter a real number! Strings won\'t work' ) );
}else if ( ( number3 == '' ) || ( number3 == null ) ) {
    number3 = parseFloat( prompt( 'You can not leave the box empty! Please enter a number value' ) );
}else {
    console.log( 'a3 = ' + number3 );
}

// saving temp value of number 1
var temp1 = number1;

// exchanging value of number 1 with value of number 2
number1 = number2;

// exchanging values between number 2 and number 3
number2 = number3;

// setting number 3 to get the initial value of number 1
number3 = temp1;

// printing the results
console.log( 'After exchanging values' );
console.log( 'a1 = ' + number1 + ', a2 = ' + number2 + ' and a3 = ' + number3 );