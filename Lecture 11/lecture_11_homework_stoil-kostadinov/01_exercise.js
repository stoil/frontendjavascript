/**
 * Lecture 11 Homework
 * Exercise 1
 *
 * Implement the car example a few slides up
 *
 * Create another two types of cars, like SportCar, so Bus and Jeep can inherit from them
 * Implement new method/s in Car and override it/them in the subclasses
 * Implement a static method
 * Use both the new EcmaScript6 and the old syntax to implement the classes
 *
 * Hint: There is a way to implement static method “the old way”, not the EcmaScript6, try to find it
 *
 */

"use strict";

/**
 * Prior ECMAscript 6 way
 */

var Car = function (make, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner) {
	this.make = make;
	this.maxSpeed = maxSpeed;
	this.currentSpeed = currentSpeed;
	this.currentGear = currentGear;
	this.numberOfDoors = numberOfDoors;
	this.idNumber = idNumber;
	this.isSportCar = isSportCar;
	this.owner = owner;
};
Car.prototype.changeOwner = function (newOwner) {
	this.owner = newOwner;
};
Car.prototype.startEngine = function () {
	console.log('Engine started');
};
Car.prototype.changeGear = function (newGear) {
	this.currentGear = newGear;
};
Car.prototype.accelerate = function () {
	return this.currentSpeed = this.currentSpeed * 2;
};

var SportCar = function (make, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner, isCabriolet, price) {
	Car.call(this, make, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner);
	this.isCabriolet = isCabriolet;
	this.price = price;
};
SportCar.prototype = Object.create(Car.prototype);
SportCar.constructor = SportCar;
SportCar.prototype.switchTurbo = function () {
	console.log('Turbo switched');
};
SportCar.prototype.changeGear = function (newGear) {
	this.currentGear = newGear;
};

var Jeep = function (make, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner) {
	Car.call(this, make, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner);
};
Jeep.prototype = Object.create(Car.prototype);
Jeep.constructor = Jeep;
Jeep.prototype.switch4x4 = function () {
	console.log('4x4 switched');
};
Jeep.prototype.driveOffRoad = function () {
	console.log( 'Driving Off Road');
};

var Bus = function (make, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner, numberOfSeats, placeForLuggage) {
	Car.call(this, make, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner);
	this.numberOfSeats = numberOfSeats;
	this.placeForLuggage = placeForLuggage;
};
Bus.prototype = Object.create(Car.prototype);
Bus.constructor = Bus;
// Static method prior es6
Bus.busLoads = function () {
	console.log('The Bus is loading the kids!');
};

var bmw = new Car('BWM', 300, 100, 3, 5, 123, false, 'Stoil Kostadinov');
console.log(bmw.accelerate());
bmw.changeOwner('John Doe');
console.log(bmw.owner);
bmw.changeGear(6);
console.log(bmw.currentGear);

var ferrari = new SportCar('Ferrari', 360, 160, 4, 3, 124, true, 'Stoil Kostadinov', true, 100000);
ferrari.switchTurbo();
ferrari.changeGear(7);
console.log(ferrari.currentGear);

var grandCherokee = new Jeep('Jeep Grand Cherokee', 260, 100, 4, 5, 126, false, 'Peter Thiel');
grandCherokee.switch4x4();
grandCherokee.driveOffRoad();


Bus.busLoads();
var schoolBus = new Bus('Mercedes', 160, 80, 4, 6, 130, false, 'John Doe', 32, true);
schoolBus.startEngine();
schoolBus.changeGear(5);
console.log(schoolBus.currentGear);


/**
 * The ECMAscript 6 way
 */

/*
class Car {
	constructor(make, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner) {
		this.make = make;
		this.maxSpeed = maxSpeed;
		this.currentSpeed = currentSpeed;
		this.currentGear = currentGear;
		this.numberOfDoors = numberOfDoors;
		this.idNumber = idNumber;
		this.isSportCar = isSportCar;
		this.owner = owner;
	}
	changeOwner(newOwner) {
		this.owner = newOwner;
	}
	startEngine() {
		console.log('Engine started');
	}
	changeGear(newGear) {
		this.currentGear = newGear;
	}
	accelerate() {
		return this.currentSpeed = this.currentSpeed * 2;
	}

}
class SportCar extends Car {
	constructor(make, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner, isCabriolet, price) {
		super(make, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner);
		this.isCabriolet = isCabriolet;
		this.price = price;
	}
	switchTurbo() {
		console.log('Turbo switched');
	}
	// method overriding
	changeGear(newGear) {
		super.changeGear();
		this.currentGear = 'The ' + this.make + ' changed gear to ' + newGear;
	}

}

class Jeep extends Car {

	switch4x4() {
		console.log('4x4 switched');
	}
	driveOffRoad() {
		console.log( 'Driving Off Road');
	}
}

class Bus extends Car {
	constructor(make, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner, numberOfSeats, placeForLuggage) {
		super(make, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner);
		this.numberOfSeats = numberOfSeats;
		this.placeForLuggage = placeForLuggage;
	}
	// Static method
	static busLoads() {
		console.log('The Bus is loading the kids!');
	}
}

let bmw = new Car('BWM', 300, 100, 3, 5, 123, false, 'Stoil Kostadinov');
console.log(bmw.accelerate());
bmw.changeOwner('John Doe');
console.log(bmw.owner);
bmw.changeGear(6);
console.log(bmw.currentGear);

let ferrari = new SportCar('Ferrari', 360, 160, 4, 3, 124, true, 'Stoil Kostadinov', true, 100000);
ferrari.switchTurbo();
ferrari.changeGear(7);
console.log(ferrari.currentGear);

let grandCherokee = new Jeep('Jeep Grand Cherokee', 260, 100, 4, 5, 126, false, 'Peter Thiel');
grandCherokee.switch4x4();
grandCherokee.driveOffRoad();


Bus.busLoads();
let schoolBus = new Bus('Mercedes', 160, 80, 4, 6, 130, false, 'John Doe', 32, true);
schoolBus.startEngine();
schoolBus.changeGear(5);
console.log(schoolBus.currentGear);*/
