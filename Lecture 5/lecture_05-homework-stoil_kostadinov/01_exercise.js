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

var sentence = 'Брала мома къпини';

var wordsArr = sentence.split( ' ' );
wordsArr.reverse();
console.log( wordsArr );