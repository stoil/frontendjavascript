"use strict";

function personBuilder(age, hairColor) {
    return {
        age: age,
        hairColor: hairColor,
        changeHair: function(newColor) {
            return this.hairColor = newColor;
        }
    };
}

var john = personBuilder(34, 'blond');
john.changeHair('black');
console.log(john.hairColor);
