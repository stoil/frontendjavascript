/**
 * Lecture 7 Homework
 * Exercise 2
 *
 * Write a JavaScript function to check if in a given expression the brackets are put correctly.
 * Example of correct expression: ((a+b)/5-d).
 * Example of incorrect expression: )(a+b)).
 *
 */

"use strict";

function checkParenthesis( expression ) {
    let countOpening = 0;
    let countClosing = 0;
    for ( let i = 0; i < expression.length; ++i ) {
        if ( expression[i] == '(' ) {
            countOpening++;
        }
        if ( expression[i] == ')' ) {
            countClosing++;
        }
    }
    if ( countOpening == countClosing && ( expression.indexOf( '(' ) < expression.indexOf( ')' ) ) ) {
        return console.log( 'The brackets in this expression "' + expression + '" are put up correctly!' );
    }else {
        return console.log( 'There is a mistake in this expression "' + expression );
    }
}

checkParenthesis( '((a+b)/5-d)' );