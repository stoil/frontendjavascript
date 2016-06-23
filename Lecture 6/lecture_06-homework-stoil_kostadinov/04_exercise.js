/**
 * Lecture 6 Homework
 * Exercise 4
 *
 * Write a function to count the number of divs on the web page
 *
 */

"use strict";

function countDivs( elemToCount ) {
    return console.log( 'The number of "' + elemToCount + '" elements in this page is ' + document.getElementsByTagName( elemToCount ).length );
}

countDivs( 'div' );