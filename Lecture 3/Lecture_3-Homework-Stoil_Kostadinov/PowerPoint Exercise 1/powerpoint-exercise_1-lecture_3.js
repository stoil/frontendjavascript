/*
 * Lecture 3 Homework
 * PowerPoint Exercise 1
 * Author: Stoil Kostadinow <s.k.kostadinov@gmail.com>
 */

"use strict";
// Prompt for number 1
var number1 = prompt( 'Please enter a Number 1 value in the field below!' );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( number1 ) ) {
    number1 = prompt( 'You can only enter a real number! Strings won\'t work' );
}else if ( ( number1 == '' ) || ( number1 == null ) ) {
    number1 = prompt( 'You can not leave the box empty! Please enter a number value' );
}else {
    console.log( 'Number 1 = ' + number1 );
}

// Prompt for number 2
var number2 = prompt( 'Please enter a Number 2 value in the field below!' );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( number2 ) ) {
    number2 = prompt( 'You can only enter a real number! Strings won\'t work' );
}else if ( ( number2 == '' ) || ( number2 == null ) ) {
    number2 = prompt( 'You can not leave the box empty! Please enter a number value' );
}else {
    console.log( 'Number 2 = ' + number2 );
}


// Check if number 1 is greater than number 2,
// we exchange their values
if ( number1 > number2 ) {
    console.log( number1 + ' > ' + number2 );
    let temp = number1;
    number1 = number2;
    number2 = temp;
    console.log( 'Number 1 = ' + number1 + ' and Number 2 = ' + number2 );
}else {
    console.log( number1 + ' < ' + number2 );
}