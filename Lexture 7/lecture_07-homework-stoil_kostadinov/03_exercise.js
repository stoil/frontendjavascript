/**
 * Lecture 7 Homework
 * Exercise 3
 *
 * Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
 * Example: The target substring is "in". The text is as follows:
 *
 * We are living in an yellow submarine. We don't have anything else.
 * Inside the submarine is very tight. So we are drinking all the day.
 * We will move out of it in 5 days.
 *
 * The result is: 9
 *
 */

"use strict";

function countSubstring( subStr, text ) {
    subStr = subStr || 'in';
    text = text || 'We are living in an yellow submarine. We don\'t have anything else. ' +
        'Inside the submarine is very tight. So we are drinking all the day. ' +
        'We will move out of it in 5 days. We can\'t wait to go out and get into a bar.';
    text.toLowerCase();
    /*let counter = 0;
    for ( let i = 0; i <= text.length; ++i ) {
        if ( ( text[i] + text[i+1] ) == subStr ) {
            counter++;
        }
    }
    return counter;*/

    return text.split( subStr ).length - 1;
}
console.log( 'The number of times the substring appears in this text is ' + countSubstring() );