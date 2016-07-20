function Point(x, y) {
	this.x = x;
	this.y = y;
}

function line(point1, point2) {
	return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
}

function ifTriangle(line1, line2, line3) {
	return ((line1 + line2 > line3) && (line1 + line3 > line2) && (line2 + line3 > line1)) ? true : false;
}

var point1 = new Point(3, 2);
var point2 = new Point(4, 5);
var point3 = new Point(3.5, 7);

var line1 = line(point1, point2);
var line2 = line(point2, point3);
var line3 = line(point1, point3);

console.log("Length of line 1 is " + line1);
console.log("Can L1, l2, l3 make a triangle: " + ifTriangle(line1, line2, line3));

/*

 About Exercise 01 from Lecture 10:

 Your code as it is right now throws an error:

 > Uncaught ReferenceError: getDistance is not defined(…)

 `function line(point1, point2) {
 return {
 pointA: point1,
 pointB: point2,
 getDistance: function() {
 return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
 }
 };
 }`
 In this function you are returning an object with two properties and one method but you don't need this properties. All you need is to pass two Point objects to this function and return this expression:
 `return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));`
 **So my suggestion is the function should look like that:**
 `function line(point1, point2) {
 // Returns the distance between the two points
 return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
 }`

 On line 29 you are declaring a function and after that on line 33 you are overriding the same function:
 `function ifTriangle(line1, line2, line3) {
 return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
 }

 function ifTriangle(line1, line2, line3) {
 var a = getDistance(line1.pointA, line1.pointB);
 var b = getDistance(line2.pointA, line2.pointB);
 var c = getDistance(line3.pointA, line3.pointB);
 return ((a + b > c) && (a + c > b) && (b + c > a));
 }`

 I believe in this function you should pass 3 separate lines and the function should check if those 3 lines are forming a triangle by running the following expression: `((line1 + line2 > line3) && (line1 + line3 > line2) && (line2 + line3 > line1)) ? true : false`

 **So my suggestion is the function should look like that:**

 `function ifTriangle(line1, line2, line3) {
 return ((line1 + line2 > line3) && (line1 + line3 > line2) && (line2 + line3 > line1)) ? true : false;
 }`

 And since you are returning the length of the line between two points from the line function, the code on line 48 should look like this:
 `console.log("Length of line 1 is " + l1.getDistance());`

 NOTICE: The description of the Exercise says; we have to implement the classes once with ECMAscript 6 syntax and once with ECMAscript 5 syntax



 */