/**
 * Lecture 5 Homework
 * Exercise 4
 *
 * Write a script that compares two char arrays lexicographically (letter by letter).
 *
 */

"use strict";

var firstArr = ['a', 'b', 'c', 'd', 'e'],
    secondArr= ['f', 'a', 'c', 'i', 'j'];

if ( firstArr.join('') > secondArr.join('') ) {
    console.log('The first array "' + firstArr.join() + '" is lexicographically after the second array "' + secondArr.join());
}else {
    console.log('The first array "' + firstArr.join() + '" is lexicographically before the second array "' + secondArr.join());
}

/*
console.log( 'First char array is ' + firstArr.join() );
console.log( 'Second char array is ' + secondArr.join() );

for ( let i = 0; i < firstArr.length; ++i ) {
    if ( firstArr[i] > secondArr[i] ) {
        console.log( '"' + firstArr[i] + '" is after "' + secondArr[i] + '" lexicographically!' );
    }else if ( firstArr[i] < secondArr[i] ) {
        console.log( '"' + firstArr[i] + '" is before "' + secondArr[i] + '" lexicographically!' );
    }else {
        console.log( '"' + firstArr[i] + '" is equal to "' + secondArr[i] + '" lexicographically!' );
    }
}*/
