/**
 * Lecture 7 Homework
 * Exercise 11
 *
 * Write a function that formats a string using placeholders:
 * var str = stringFormat('Hello {0}!', 'Peter');
 * str = 'Hello Peter!';
 *
 * The function should work with up to 30 placeholders and all types
 * var frmt = '{0}, {1}, {0} text {2}';
 * var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
 * str = '1, Pesho, 1 text Gosho'
 *
 */

"use strict";

var string = 'Hello {0}! My name is {1} and I am {2}. I have {2} years of life experience :) however the {0} has still a lot to offer.';

function formatString( string ) {
    var selfArguments = arguments; // Get array of Function object arguments
    return string.replace( /{(\w+|\W+)}/g, function( match, p1 ) {
        return selfArguments[+p1 + 1];
    } );
}
console.log( formatString( string, 'World', 'Petar', 26 ) );
