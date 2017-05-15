/* Using keyboard
Made by: Gage13
Date: 2017-04-28 */

// This are variables to draw a note slip
var posX = 100;
var posY = 100;
var slipSize = 50;

// This array will hold letters (initial and typed ones)
var scriblings = ['W', 'r', 'i', 't', 'e' 'h', 'e', 'r', 'e'];

function setup() {
	var sketch1 = createCanvas(640, 480);
	sketch1.parent('Keyboard');
}

function draw() {
	background(139,69,19);
	
	// Create the note slip
	fill(245,222,179);
	rect(posX, posY, slipSize, (slipSize*2));
}
