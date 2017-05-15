/* Using keyboard
Made by: Gage13
Date: 2017-04-28 */

// This are variables to draw a note slip
var posX = 100;
var posY = 100;
var slipSize = 150;

// coordinates for the letters in the array
var lettersX;
var lettersY;

// This array will hold letters (initial and typed ones)
var letters = ['W', 'r', 'i', 't', 'e'];

function setup() {
	var sketch1 = createCanvas(640, 480);
	sketch1.parent('Keyboard');
}

function draw() {
	background(139,69,19);
	
	// Create the note slip
	fill(245,222,179);
	rect(posX, posY, slipSize, slipSize);
	
	// This for loop will display the letters stored in the array
	for (var i = 0; i < letters.length; i++) {
		fill(0);
		lettersX = (i*15) % (slipSize - 40) + (posX + 20);
		lettersY = posY + 20 + 15 * floor((i*15) / (slipSize - 40));
		text(letters[i], lettersX, lettersY);
	}
}

function keyTyped() {
	// Move the note when A is typed
	if (key === 'd') {
		posX++;
	}
	
	if (key === 'a') {
		posX--;
	}
	
	if (key === 'w') {
		posY--;
	}
	
	if (key === 's') {
		posY++;
	}
}