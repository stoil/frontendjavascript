/**
 * Lecture 7 Homework
 * Exercise 9
 *
 * Write a function for extracting all email addresses from given text. All substrings that match the format <identifier>@<host>…<domain> should be recognized as emails. Return the emails as array of strings.
 *
 */

"use strict";

function getArrayOfEmails() {
    var string = document.getElementById( 'input' ).value;
    document.getElementById( 'container' ).innerHTML =  string.match( /(?:\w+@[a-zA-Z-_]{2,}\.[a-zA-Z]{2,})/gi ).join( ', ' );
}

document.getElementById( 'actionBtn' ).onclick = getArrayOfEmails;