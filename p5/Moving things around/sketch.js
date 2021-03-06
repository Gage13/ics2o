/* Moving things around 
Made by: Dragi Plakalovic
Date: 04-18-2017
*/

// Ball position and speed (Gravity Ball).
var posX = 240; // X position of gravity ball
var posY = 10; // Initial position Y of ball
var speedY = 3; // Initial speed.

// Friction car position and speed.
var centerX = 100; // Initial position X
var centerY = 850; // Y position that remains the same
var velocityX = 47; // Initial speed

function setup() {
	createCanvas(1280, 900);
}

// Function that draws friction car
function car() {
	// draw the car body
	fill(255, 0, 115); // Car colour
	rect(centerX - 100, centerY - 20, 100, 20); // Small car part
	rect((centerX + 15) - 100, centerY - 40, 70, 40); // Large car part
	// draw the wheels
	fill(77, 66, 66); // Wheel colour
	ellipse((centerX + 25) - 100, centerY, 24, 24); // Left wheel
	ellipse((centerX + 75) - 100, centerY, 24, 24); // Right wheel
	
	centerX = centerX + velocityX; // Move the ball by adding velocity to it.
	velocityX--; // To simulate friction, velocity of the ball drops by 1 pixel each time.
	
	// I do not want the car to go left and accelarate. I want to stop it when velocity drops to zero.
	if (velocityX <= 0) {
		velocityX = 0;
	}
}

function draw() {
	background(0); // Background black
	
	// Gravity Ball
	fill(255); // Gravity ball colour white.
	ellipse(posX, posY, 30, 30); // Ball position and size.
	
	posY = posY + speedY; // Simulate ball fall by adding speed caused by gravity 
	speedY = speedY + 1; // Speed increases as gravity pulls ball down
	
	// When ball hits ground, it will bounce up. The ball will slow down, due to gravity. Finally, it will fall down.
	if (posY > height - 10) {
		speedY = -speedY;
	}
	
	/* Function calls for car. */
	car();
}