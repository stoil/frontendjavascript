/**
 * Lecture 7 Homework
 * Exercise 6
 *
 * Write a function that extracts the content of a html page given as text. The function should return anything that is in a tag, without the tags:
 *
 * <html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>
 *
 * result: Sample sitetextmore textand more...in body
 *
 */

"use strict";

function extractContent() {
    let source = document.getElementsByTagName( '*' )[0].innerHTML;
    return source.replace( /<(.*?)>/g, '' ).trim().replace( /\s{2,200}/g, '' );
}
console.log( extractContent() );