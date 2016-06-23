/*
 * Lecture 3 Homework
 * Exercise 5
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
    console.log( 'A = ' + number1 );
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
    console.log( 'B = ' + number2 );
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
    console.log( 'C = ' + number3 );
}

// checking which number is biggest
// and which one is smallest
// and printing the results in DESC order

if ( number1 > number2 ) {
    if ( number2 > number3 ) {
        console.log( number1 + ', ' + number2 + ', ' + number3 );
    }else if ( number1 > number3 ) {
        console.log( number1 + ', ' + number3 + ', ' + number2 );
    }else {
        console.log( number3 + ', ' + number1 + ', ' + number2 );
    }
}else if ( number2 > number3 ) {
    if ( number1 > number3 ) {
        console.log( number2 + ', ' + number1 + ', ' + number3 );
    }else {
        console.log( number2 + ', ' + number3 + ', ' + number1 );
    }
}else {
    if ( number1 > number2 ) {
        console.log( number3 + ', ' + number1 + ', ' + number2 );
    }else {
        console.log( number3 + ', ' + number2 + ', ' + number1 );
    }
}