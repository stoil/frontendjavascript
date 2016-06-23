/**
 * Lecture 4 Homework
 * Exercise 8
 *
 * Да се въведат N на брой числа и да се намерят най-малкото и най-голямото измежду тях.
 *
 */

"use strict";

// Creating array of numbers
var numbers = [3, 6, 9, 32, 1, -5, 98, 2];

/**
 * Declaring min and max variables
 * and set their values to be the first number of the array
 *
 */
var min = numbers[0];
var max = numbers[0];

console.log( 'Entered numbers are: ' + numbers.join( ', ' ) );

/**
 * Loop trough the numbers array and do comparison of each number with the next one.
 * If min is > than the current, save it
 * If max is < than the current, save it
 */
for ( let i of numbers ) {
    if ( min > i ) {
        min = i;
    }
    if ( max < i ) {
        max = i;
    }
}

console.log( 'The Biggest number is: ' + max + ' and the smallest number is ' + min );

