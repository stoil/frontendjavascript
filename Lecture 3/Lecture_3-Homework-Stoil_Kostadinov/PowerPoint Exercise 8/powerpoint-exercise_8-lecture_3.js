/*
 * Lecture 3 Homework
 * PowerPoint Exercise 8
 * Author: Stoil Kostadinow <s.k.kostadinov@gmail.com>
 */

"use strict";

// Prompt for number
var number = prompt( 'Please enter a number between 0 999 in the field below!' );

// if it is not a number or
// if the box is empty or user clicks cancel,
// show another prompt with respective text
if ( isNaN( number ) ) {
    number = prompt( 'You can only enter a real number! Strings won\'t work' );
}else if ( ( number == '' ) || ( number == null ) ) {
    number = prompt( 'You can not leave the box empty! Please enter a number value' );
}else if ( number < 0 || number > 999 ) {
    number = prompt( 'You can not type number bigger than 999 or number with negative sign.' );
}
function text( number ) {
    var string = '';
    switch ( number ) {
        case 1: string = 'one'; break;
        case 2: string = 'two'; break;
        case 3: string = 'three'; break;
        case 4: string = 'four'; break;
        case 5: string = 'five'; break;
        case 6: string = 'six'; break;
        case 7: string = 'seven'; break;
        case 8: string = 'eight'; break;
        case 9: string = 'nine'; break;
        case 10: string = 'ten'; break;
    }
    return string;
}
var units = 0;
var tenths = 0;
var hundreds = 0;

units = number % 10;
tenths = parseInt( number / 10 ) % 10;
hundreds = parseInt( number / 100 ) % 10;
var hundredsStr = '';
var tenthsStr = '';
var unitsStr = '';
console.log( 'English name of number: ' + number + ' is: ' );
if ( number == 0 ) {
    console.log( 'Zero' );
}
if ( hundreds != 0 ) {
    hundredsStr = text( hundreds ) + ' hundred ';
}
if  ( tenths != 0 ) {
    if ( tenths == 1 ) {
        switch ( units ) {
            case 0: unitsStr =  'ten'; break;
            case 1: unitsStr =  'eleven'; break;
            case 2: unitsStr =  'twelve'; break;
            case 3: unitsStr =  'thirteen'; break;
            case 4: unitsStr =  'fourteen'; break;
            case 5: unitsStr =  'fifteen'; break;
            case 6: unitsStr =  'sixtteen'; break;
            case 7: unitsStr =  'seventeen'; break;
            case 8: unitsStr =  'eighteen'; break;
            case 9: unitsStr =  'nineteen'; break;
            default: break;
        }
    }
    else if ( tenths == 2 ) {
        tenthsStr = 'twenty ';
    }
    else if ( tenths == 3 ) {
        tenthsStr = 'thirty ';
    }
    else if ( tenths == 4 ) {
        tenthsStr = 'fourty ';
    }
    else if ( tenths == 5 ) {
        tenthsStr = 'fifty ';
    }
    else if ( tenths == 6 ) {
        tenthsStr = 'sixty ';
    }
    else if ( tenths == 7 ) {
        tenthsStr = 'seventy ';
    }
    else if ( tenths == 8 ) {
        tenthsStr = 'eighty ';
    }
    else if ( tenths == 9 ) {
        tenthsStr = 'ninety ';
    }

}
if ( units != 0 && tenths != 1 ) {
    unitsStr = text( units );
}
console.log( hundredsStr + tenthsStr + unitsStr );