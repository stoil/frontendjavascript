/**
 * Lecture 4 Homework
 * Exercise 3
 *
 * Да се изведат на екрана всички нечетни числа от -10 до 10 .
 */

"use strict";
for ( let i = -10; i <= 10; ++i ) {
    if ( i % 2 !== 0 ) {
        console.log( i );
    }
}