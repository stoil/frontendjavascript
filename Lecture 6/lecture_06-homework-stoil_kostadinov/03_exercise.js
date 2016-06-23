/**
 * Lecture 6 Homework
 * Exercise 3
 *
 * Write a function that finds all the occurrences of word in a text
 * The search can case sensitive or case insensitive
 * Use function overloading
 *
 */

"use strict";

function wordOccurrences( source, searchKey, caseInSensitive = true ) {
    if ( caseInSensitive ) {
        source = source.toLowerCase();
        searchKey = searchKey.toLowerCase();
    }

    let sourceArr = source.split( ' ' );
    let wordCount = 0;
    for ( let i = 0; i < sourceArr.length; ++i ) {

        if ( sourceArr[i] == searchKey ) {
            wordCount++;
        }
    }
    return console.log( 'The number of occurrences of the word "' + searchKey + '" is ' + wordCount );
}

wordOccurrences( 'This is a dummy text. The text Is only for experimental purposes.', 'is' );