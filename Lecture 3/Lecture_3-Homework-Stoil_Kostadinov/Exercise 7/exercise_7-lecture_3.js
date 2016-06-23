/*
 * Lecture 3 Homework
 * Exercise 5
 * Author: Stoil Kostadinow <s.k.kostadinov@gmail.com>
 */
"use strict";
// Prompt for a time in hours
var time = parseInt( prompt( 'Please enter a time in hours ( 24 hr format )! Ex: 13' ), 10 );

/* if it is not a number or
* if the box is empty or user clicks cancel,
* show another prompt with respective text
*/
if ( isNaN( time ) ) {
    time = parseInt( prompt( 'You can only enter a real number! Strings won\'t work' ), 10 );
}else if ( ( time == '' ) || ( time == null ) ) {
    time = parseInt( prompt( 'You can not leave the box empty! Please enter an hour number!' ) );
}else {
    console.log( 'Time = ' + time + ':00 o\'clock' );
}

// Prompt for money amount
var money = parseFloat( prompt( 'Please enter a how much money do you have!' ) );

/* if it is not a number or
 *if the box is empty or user clicks cancel,
 * show another prompt with respective text
 */
if ( isNaN( money ) ) {
    money = parseFloat( prompt( 'You can only enter a real number amount! Strings won\'t work' ) );
}else if ( ( money == '' ) || ( money == null ) ) {
    money = parseFloat( prompt( 'You can not leave the box empty! Please enter amount' ) );
}else {
    console.log( 'Money = ' + money  + 'лв');
}

// Prompt for health status
var isHealthy = parseInt( prompt( 'Am I sick? Please enter 1 if you are sick and 2 if you are healthy!' ) );
/*
* if it is not a number or
* if the box is empty or user clicks cancel,
* or if the input is different than 1 or 2
* show another prompt with respective text
*/
if ( isNaN( isHealthy ) ) {
    isHealthy = parseInt( prompt( 'You can only enter a real numbers ( 1 if you are sick and 2 if you are healthy )! Strings won\'t work' ), 10 );
}else if ( ( isHealthy == '' ) || ( isHealthy == null ) ) {
    isHealthy = parseInt( prompt( 'You can not leave the box empty! Please enter a number value ( 1 if you are sick and 2 if you are healthy)' ), 10 );
}else if ( !( isHealthy == 1 || isHealthy == 2 ) ) {
    isHealthy = parseInt( prompt( 'You can only type 1 or 2. ( 1 if you are sick and 2 if you are healthy)' ), 10 );
}else if ( isHealthy == 2 ) {
    console.log( 'I am healthy.' );
}else if ( isHealthy == 1 ) {
    console.log( 'I am sick' );
}

/*
* If I am is sick, and I have money,
* I will buy medicine
*
* If I am healthy
* and I have more than 10лв,
* and it is no later than 18:00 o'clock
* I will go out for a coffee.
*
* If I am healthy and I have money ( more than 10лв ) and it is later than 18:00 o'clock,
* I will order a pizza
*
* If I am healthy and I have no money, I will stay at home and read a book.
*/
if ( isHealthy == 1 ) {
    if ( money > 0 ) {
        console.log( 'I will go out to buy a medicine and take my health under control.' );
    }else {
        console.log( 'I am sick and I have no money so I will stay at home and drink hot tea until I get better.' );
    }
}else {
    if ( money > 10 ) {
        if ( time <= 18 ) {
            console.log( 'I will go out for a coffee.' );
        }else {
            console.log( 'It is too late for coffee, I will stay at home and order a pizza' );
        }
    }else {
        console.log( 'I have no money so I wont go out. Instead I will stay at home and read a book.' );
    }
}

