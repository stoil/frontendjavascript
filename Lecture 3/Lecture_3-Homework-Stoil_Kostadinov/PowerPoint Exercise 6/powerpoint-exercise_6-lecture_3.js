/*
 * Lecture 3 Homework
 * PowerPoint Exercise 6
 * Author: Stoil Kostadinow <s.k.kostadinov@gmail.com>
 */

"use strict";
// Prompt for a
var a = prompt( 'Please enter a number for coefficient "a" value in the field below!' );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( a ) ) {
    a = prompt( 'You can only enter a real number! Strings won\'t work' );
}else if ( ( a == '' ) || ( a == null ) ) {
    a = prompt( 'You can not leave the box empty! Please enter a number value' );
}else {
    console.log( 'a = ' + a );
}

// Prompt for b
var b = prompt( 'Please enter a number for coefficient "b" value in the field below!' );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( b ) ) {
    b = prompt( 'You can only enter a real number! Strings won\'t work' );
}else if ( ( b == '' ) || ( b == null ) ) {
    b = prompt( 'You can not leave the box empty! Please enter a number value' );
}else {
    console.log( 'b = ' + b );
}

// Prompt for c
var c = prompt( 'Please enter a number for coefficient "c" value in the field below!' );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( c ) ) {
    c = prompt( 'You can only enter a real number! Strings won\'t work' );
}else if ( ( c == '' ) || ( c == null ) ) {
    c = prompt( 'You can not leave the box empty! Please enter a number value' );
}else {
    console.log( 'c = ' + c );
}

// Finding the determinant D = b*b - 4*a*c
var d = ( b*b ) -  ( 4 * a * c ) ;

// If d > 0 there are 2 real roots
if ( d > 0 ) {
    let x1 = ( -b + Math.sqrt( Math.pow( b, 2 ) - ( 4 * a * c ) ) ) / 2 * a;
    let x2 = ( -b - Math.sqrt( Math.pow( b, 2 ) - ( 4 * a * c ) ) ) / 2 * a;
    console.log( 'This quadratic equation has two roots. \n' +
        'Root 1 = ' + x1 + '\n' +
        'Root 2 = ' + x2 );
}else if ( d === 0 ) { // If D === 0, there is ony one real root
    let x1 = -( b / 2 * a );
    console.log( 'This quadratic equation has only one root. Root = ' + x1 );
}else { // If D < 0, there are no real roots
    console.log( 'This quadratic equation has no roots.' );
}
