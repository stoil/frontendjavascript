/**
 * Lecture 7 Homework
 * Exercise 8
 *
 * Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL]. Sample HTML fragment:
 *
 */

"use strict";

function replaceAnchors() {
    var string = document.getElementById( 'input' ).value;
    document.getElementById( 'input' ).innerHTML =  string.replace( /(?:<a)\s([href]{4}=")(((ht|ft)tp(s?):\/\/)?([a-zA-Z]{3}\.)?[\w]+\.[a-zA-Z]{2,})(?:">)/gi, '[URL="$2"]' )
                 .replace( /(?:<\/a>)/gi, '[/URL]' )
    ;
}

document.getElementById( 'actionBtn' ).onclick = replaceAnchors;