/*
 * Lecture 3 Homework
 * PowerPoint Exercise 7
 * Author: Stoil Kostadinow <s.k.kostadinov@gmail.com>
 */

"use strict";
 var sequence = [-123,22,5,4.355,-33];
var maxN = sequence[0];

for ( let i of sequence ) {
    if ( maxN < i ) {
        maxN = i;
    }
}
console.log( maxN );