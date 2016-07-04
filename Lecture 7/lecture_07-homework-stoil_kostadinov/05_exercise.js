/**
 * Lecture 7 Homework
 * Exercise 5
 *
 * Write a function that replaces non breaking white-spaces in a text with &nbsp;
 *
 */

"use strict";

function replaceSpaces() {
    var text = document.getElementById( 'container' ).innerText;
    return document.getElementById( 'container' ).innerHTML = text.replace( /\s/g, '<span class="nbsp">&amp;nbsp;</span>' );
}

document.getElementById( 'actionBtn' ).onclick = replaceSpaces;
