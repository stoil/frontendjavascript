/**
 * Lecture 10 Homework
 * Exercise 1
 *
 * Write functions for working with shapes in  standard Planar coordinate system
 * Points are represented by coordinates P(X, Y)
 * Lines are represented by two points, marking their beginning and ending
 * L(P1(X1,Y1), P2(X2,Y2))
 * Calculate the distance between two points
 * Check if three segment lines can form a triangle.
 * Use both the new EcmaScript6 and the old syntax to implement the classes
 *
 */

"use strict";

/**
 * Prior ECMAscript 6 way
 */

/*var Point = function(x, y) {
 this.x = x;
 this.y = y;
 };

 var Line = function(point1, point2) {
 this.point1 = point1;
 this.point2 = point2;
 };
 Line.prototype.calcDistance = function () {
 var point1X = this.point1.x;
 var point1Y = this.point1.y;
 var point2X = this.point2.x;
 var point2Y = this.point2.y;
 return Math.sqrt( Math.pow( ( point2X - point1X ), 2 ) + Math.pow( (point2Y - point1Y), 2 ) );
 };

 var Triangle = function(a, b, c) {
 this.sideA = a;
 this.sideB = b;
 this.sideC = c;
 };
 Triangle.prototype.isTriangle = function () {
 var a = this.sideA;
 var b = this.sideB;
 var c = this.sideC;
 return ( a + b > c && a + c > b && b + c > a ) ? a + ', ' + b + ', ' + c + ' makes triangle'  : a + ', ' + b + ', ' + c + ' does not make triangle';
 };

 var point1 = new Point(6, 2);
 var point2 = new Point(-1, 5);
 var point3 = new Point(-8, 7);

 var line1 = new Line(point1, point2);
 var line2 = new Line(point1, point3);
 var line3 = new Line(point2, point3);

 var triangle = new Triangle(line1.calcDistance(), line2.calcDistance(), line3.calcDistance());

 console.log(triangle.isTriangle());*/

/**
 * The ECMAscript 6 way
 */

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
class Line {
	constructor(point1, point2) {
		this.point1 = point1;
		this.point2 = point2;
	}
	calcDistance() {
		let point1X = this.point1.x;
		let point1Y = this.point1.y;
		let point2X = this.point2.x;
		let point2Y = this.point2.y;
		return Math.sqrt( Math.pow( ( point2X - point1X ), 2 ) + Math.pow( (point2Y - point1Y), 2 ) );
	}
}

class Triangle {
	constructor(a, b, c) {
		this.sideA = a;
		this.sideB = b;
		this.sideC = c;
	}
	isTriangle() {
		let a = this.sideA;
		let b = this.sideB;
		let c = this.sideC;
		return ( ( (a + b) > c ) && ( (a + c) > b ) && ( (b + c) > a )  ) ? a + ', ' + b + ', ' + c + ' makes triangle!' : a + ', ' + b + ', ' + c + ' does not make triangle!';
	}
}

let point1 = new Point(6, 2);
let point2 = new Point(-1, 5);
let point3 = new Point(-8, 7);

let line1 = new Line(point1, point2);
let line2 = new Line(point1, point3);
let line3 = new Line(point2, point3);

let triangle = new Triangle(line1.calcDistance(), line2.calcDistance(), line3.calcDistance());

console.log(triangle.isTriangle());