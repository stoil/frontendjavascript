/*
 * Lecture 3 Homework
 * PowerPoint Exercise 2
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

// Prompt for number 3
var number3 = prompt( 'Please enter a Number 3 value in the field below!' );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( number3 ) ) {
    number3 = prompt( 'You can only enter a real number! Strings won\'t work' );
}else if ( ( number3 == '' ) || ( number3 == null ) ) {
    number3 = prompt( 'You can not leave the box empty! Please enter a number value' );
}else {
    console.log( 'Number 3 = ' + number3 );
}


/*
* If number 1 and number 2 are positive and number 3 is negative, than the product of the 3 is negative
*
* If all 3 numbers are positive, than the product is positive
*
* If number 1 or number 2 is negative and number 3 is positive, than the product is negative
*
* If number 1 or number 2 is negative and number 3 is negative, than the product is positive
*
* If number 1 and number two are negative but number 3 is positive than the product is negative
*
* If all 3 numbers are negative than the product is negative
*/
if ( number1 >= 0 && number2 >= 0 ) {
    if ( number3 < 0 ) {
        console.log( 'The product of those 3 numbers is negative (-).' );
    }else {
        console.log( 'The product of those 3 numbers is positive (+).' );
    }
}else if ( ( number1 >= 0 && number2 < 0 ) || ( number1 < 0 && number2 >= 0 ) ) {
    if ( number3 > 0 ) {
        console.log( 'The product of those 3 numbers is negative (-).' );
    }else {
        console.log( 'The product of those 3 numbers is positive (+).' );
    }
}else {
    if ( number3 >= 0 ) {
        console.log( 'The product of those 3 numbers is positive (+).' );
    }else {
        console.log( 'The product of those 3 numbers is negative (-).' );
    }
}