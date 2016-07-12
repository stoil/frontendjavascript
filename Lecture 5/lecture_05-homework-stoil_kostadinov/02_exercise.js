/**
 * Lecture 5 Homework
 * Exercise 2
 *
 * Дадени са текст и списък от думи, разделени със запетайка.
 * Списъкът описва думи, които са нецензурни и не трябва да се съдържат в текста.
 * Напишете програма, която замества всички нецензурни думи от текста със звездички.
 * Например ако имаме текста "Какъв хикс дириш тука бе менте?"
 * и списък с нецензурни думички "менте, хикс",
 * програмата трябва да го преработи така: "Какъв **** дириш тука бе *****?".
 *
 */

"use strict";

/**
 * Creating an array of censured words.
 *
 * Split each word of the text and add it to a new array.
 *
 * Loop trough the text array and search for the offensive words.
 *
 * If there is a match switch the offencive work with ****
 *
 * Convert the text array back to string.
 *
 * Print result
 */

var offensiveWords = ['менте', 'хикс'];
var text = 'Какъв хикс дириш тука бе менте?';

for ( let i in offensiveWords ) {
    text = text.replace( new RegExp( offensiveWords[i], 'gi' ), new Array( offensiveWords[i].length + 1 ).join('*') );
}
console.log(text);
