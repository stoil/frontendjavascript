/**
 * Lecture 4 Homework
 * Exercise 10
 *
 * Да се прочетат 2 числа от клавиатурата А и В. Да се изведат всички числа от А до В на степен 2(разделени с запетая).
 * Ако някое число е кратно на 3, да се изведе съобщение че числото се пропуска „skip 3“.
 * Ако сумата от всички изведени числа (без пропуснатите) стане по-голяма от 200, да се прекрати извеждането.
 *
 * Въдете А: 1 | Въведете B: 107
 * Резултат: 1, 4, skip 3, 16, 25, skip 6, 49, 64, skip 9, 100
 *
 */

"use strict";

// Prompt for number 1
var number1 = parseInt( prompt( 'Please enter number 1!' ), 10 );

// check if it is a number, if not, ask again
if ( isNaN( number1 ) ) {
    number1 = parseInt( prompt( 'Please enter a real number! String won\'t work'  ), 10 );
}else {
    console.log( 'Number 1 is: ' + number1 );
}

// Prompt for number 2
var number2 = parseInt( prompt( 'Please enter Number 2!' ), 10 );

// check if it is a number, if not, ask again
if ( isNaN( number2 ) ) {
    number2 = parseInt( prompt( 'Please enter a real number! String won\'t work'  ), 10 );
}else {
    console.log( 'Number 2 is: ' + number2 );
}

/**
 * Check If number 1 is bigger than number 2 and reverse the order of the loop.
 * Start from the smaller one towards the bigger one.
 *
 * Loop from number 1 to number 2,
 * and print each number which is not divisible by 3 raised by exponent power 2.
 *
 * If the sum of all the numbers excluding the skipped on is bigger than 200,
 * stop the loop
 *
 */

var sum = 0;
var array = [];
if ( number1 > number2 ) {
    for ( let i = number2; i <= number1; ++i ) {
        if ( sum < 200 ) {
            if ( i % 3 !== 0 ) {
                let powered = Math.pow( i, 2 );
                sum += powered;
                array.push( powered );
            }else {
                array.push( 'skip ' + i );
            }
        }
    }
}else {
    for ( let i = number1; i <= number2; ++i ) {
        if ( sum < 200 ) {
            if ( i % 3 !== 0 ) {
                let powered = Math.pow( i, 2 );
                sum += powered;
                array.push( powered );
            }else {
                array.push( 'skip ' + i );
            }
        }
    }
}


// Print array of numbers
console.log( 'Result is: ' + array.join( ', ' ) );

