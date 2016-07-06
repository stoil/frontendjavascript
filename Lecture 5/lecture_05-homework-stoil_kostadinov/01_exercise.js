/**
 * Lecture 5 Homework
 * Exercise 1
 *
 * Напишете програма, която обръща думите в дадено изречение в обратен ред.
 * Например изречението "Брала мома къпини."
 * трябва да се преобразува в "Къпини мома брала.
 *
 */

"use strict";

/**
 * Split string and add each word to an array
 *
 * Switch position of first and last word
 *
 * Print result
 */

var string = 'Брала мома къпини в попови градини.';

function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
}

var lastWordLastChar = string.split('').pop();
if ( lastWordLastChar == '.' || lastWordLastChar == '!' || lastWordLastChar == '?' || lastWordLastChar == ',' ) {
    var cleanStr = string.slice(0, string.indexOf(lastWordLastChar)).toLowerCase();
}

var newString = cleanStr.split(' ').reverse().join(' ') + lastWordLastChar;
console.log(capitalizeFirstLetter(newString));
