/**
 * Lecture 7 Homework
 * Exercise 10
 *
 * Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
 *
 */

"use strict";

function getPalindromes() {
    let string = document.getElementById( 'input' ).value,
        stringArr = string.split( ' ' ),
        palindromes = [],
        regex = /(?:\B"|"\B|\.$)/gi,
        cleaned = '',
        reversed = '';
    for ( let i = 0; i < stringArr.length; ++i ) {

        cleaned = stringArr[i].replace( regex, '' );
        reversed = cleaned.split( '' ).reverse().join( '' );
        if ( cleaned.toLowerCase() == reversed.toLowerCase() && cleaned.length > 1 ) {
            palindromes.push( cleaned );
        }

    }
    document.getElementById( 'container' ).innerHTML =  'The palindromes in this text are: ' + palindromes.join( ', ' );
}

document.getElementById( 'actionBtn' ).onclick = getPalindromes;