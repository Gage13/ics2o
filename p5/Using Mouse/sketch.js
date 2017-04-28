/* Program that changes size of the car when mouse is being pressed
Made by: Gage13
Date: 2017-04-28 */

// Variables for the image and its properties
var myImage; // Variable that holds image of the car
var xPos = 100; // X position of the image
var yPos = 200; // Y position of the image
var speed = 3; // By how much X position moves
var carSize = 100; // Initial size of the car image

function preload() {
	/* This function loads the image
	of the car */
	myImage = loadImage("Car.PNG");
}

function setup() {
	// This function creates canvas and links to the web page
	var myCanvas = createCanvas(640, 480);
  	myCanvas.parent('Mouse');
}

function draw() {
	background(255); // White background. (overrides the CSS settings)
	image(myImage, xPos, yPos, carSize, round(carSize*0.7)); // Display car image
	xPos = xPos + speed; // Move the image
	// If car disappears from the canvas, set its X position back to 100.
	if (xPos >= 640) {
		xPos = 100;
	}
}

function mousePressed() {
	// When mouse is pressed, generate a round value for the car size.
	carSize = round(random(10, 120));
}
