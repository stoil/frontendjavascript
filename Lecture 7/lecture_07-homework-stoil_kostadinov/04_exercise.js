/**
 * Lecture 7 Homework
 * Exercise 4
 *
 * You are given a text. Write a function that changes the text in all regions:
 *
 * <upcase>text</upcase> to uppercase.
 * <lowcase>text</lowcase> to lowercase
 * <mixcase>text</mixcase> to mix casing(random)
 *
 * We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.
 *
 * The expected result:
 *
 * We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.
 *
 * Regions can be nested
 *
 */

"use strict";
var text = document.getElementById( 'container' ).innerHTML;

function changeText ( text ) {
    function toUpperCase( match ) {
        return match.toUpperCase();
    }
    function toLowerCase( match ) {
        return match.toLowerCase();
    }
    function toMixedCase( match ) {
        match.toString();

        let mixedCase = "";

        for ( let i = 0; i < match.length; i++ ) {
            let randomNumber = Math.floor( Math.random() * 2);
            if ( randomNumber == 0 ) {
                mixedCase += match[i].toLowerCase();
            }
            else {
                mixedCase += match[i].toUpperCase();
            }
        }
        return mixedCase;
    }

    return text.replace( /<upcase>(.*?)<\/upcase>/g, toUpperCase )
               .replace( /<lowcase>(.*?)<\/lowcase>/g, toLowerCase )
               .replace( /<mixcase>(.*?)<\/mixcase>/g, toMixedCase )
               .replace( /<(.*?)>/g, '' )
    ;
}

document.getElementById( 'container').innerText =  changeText( text );
