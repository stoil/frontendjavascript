/*
 * Lecture 3 Homework
 * PowerPoint Exercise 5
 * Author: Stoil Kostadinow <s.k.kostadinov@gmail.com>
 */

"use strict";
// Prompt for number 1
var number = parseInt( prompt( 'Please enter a Number between 0 and 20 in the field below!' ), 10 );
 if ( isNaN(number) ) {
     number = parseInt( prompt( 'You can only enter a real number! Strings won\'t work' ), 10 );
 }else if ( number < 0 || number > 20 ) {
     number = parseInt( prompt( 'You can only enter number in the range 0 to 20' ), 10 );
 }

switch ( number ) {
    case 0:
        console.log( 'Zero' );
        break;
    case 1:
        console.log( 'One' );
        break;
    case 2:
        console.log( 'Two' );
        break;
    case 3:
        console.log( 'Three' );
        break;
    case 4:
        console.log( 'Four' );
        break;
    case 5:
        console.log( 'Five' );
        break;
    case 6:
        console.log( 'Six' );
        break;
    case 7:
        console.log( 'Seven' );
        break;
    case 8:
        console.log( 'Eight' );
        break;
    case 9:
        console.log( 'Nine' );
        break;
    case 10:
        console.log( 'Ten' );
        break;
    case 11:
        console.log( 'Eleven' );
        break;
    case 12:
        console.log( 'Twelve' );
        break;
    case 13:
        console.log( 'Thirteen' );
        break;
    case 14:
        console.log( 'Fourteen' );
        break;
    case 15:
        console.log( 'Fifteen' );
        break;
    case 16:
        console.log( 'Sixteen' );
        break;
    case 17:
        console.log( 'Seventeen' );
        break;
    case 18:
        console.log( 'Eighteen' );
        break;
    case 19:
        console.log( 'Nineteen' );
        break;
    case 20:
        console.log( 'Twenty' );
        break;
}