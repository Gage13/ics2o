/* Soccer game in HTML and p5 JavaScript
Dragi Plakalovic
2017-13-04 */

// Score variables
var scoreA = 0; // Initial home team score
var scoreB = 0; // Initial guest team score

// Sound and image variables
var mySound; // Create sound variable (spectators' cheers)
var imageBall;

// Position and speed variables
var centerX = 70; // Soccer Ball Initial Position X
var centerY = 120; // Soccer Ball Initial Position Y
var velocityX = 5; // Initial X speed of the ball
var velocityY = 5; // Initial Y speed of the ball
var p1Vel = 5; // Speed of the home team
var p2Vel = 5; // Speed of guest team

// Arrays to hold team players
var home = []; 	// Array to hold home team players
var guest = [];	// Array to hold guest team players

// Faces of the audience
var row1; // Row 1 audience
var row2; // Row 2 audience
var row3; // Row 3 audience
var row4; // Row 4 audience
var row5; // Row 5 audience
var row6; // Row 6 audience

function preload() {
	mySound = loadSound("Soccer Cheering.wav"); 
}

function setup() {
	var myCanvas = createCanvas(1350, 680); // Canvas
	myCanvas.parent("SoccerGame"); // Position on the webpage
	mySound.play();
	mySound.setVolume(0.1);
	  
	row1 = new audience(18, 20, 10, 20, 20, 45); // (1-4) Graphic details of the audience's heads; (5-6) Distance between heads' centres and number of heads for row 1.
	row2 = new audience(18, 50, 10, 20, 20, 45); // (1-4) Graphic details of the audience's heads; (5-6) Distance between heads' centres and number of heads for row 2.
	row3 = new audience(18, 80, 10, 20, 20, 45); // (1-4) Graphic details of the audience's heads; (5-6) Distance between heads' centres and number of heads for row 3.
	row4 = new audience(18, 605, 10, 20, 20, 45); // (1-4) Graphic details of the audience's heads; (5-6) Distance between heads' centres and number of heads for row 4.
	row5 = new audience(18, 635, 10, 20, 20, 45); // (1-4) Graphic details of the audience's heads; (5-6) Distance between heads' centres and number of heads for row 5.
	row6 = new audience(18, 666, 10, 20, 20, 45); // (1-4) Graphic details of the audience's heads; (5-6) Distance between heads' centres and number of heads for row 6.
	
	// Make 7 players per team
	for (var i = 0; i < 7; i++) {
		home.push(new Home());
	}
	for (var j = 0; j < 7; j++) {
		guest.push(new Guest());
	}
	
	// Load image
	imageBall = loadImage("soccer-ball.jpg");
}

function arenaField() {
	// Draw field lines
	// Huge play rect lines
	fill(0, 123, 12);
	stroke(255); // Colour  
	strokeWeight(5);
	rect(55, 100, 1230, 490);
	
	// Centre (Circle)
	fill(0, 123, 12);
	stroke(255);
	strokeWeight(5);
	ellipse(672, 340, 200, 200);
	
	// Small circle (center)
	fill(255);
	ellipse(672, 340, 20, 20);
	
	// Centre Line
	fill(255);
	strokeWeight(5);
	rect(670, 100, 2, 485);
	
	// Arc line around the big left sqaure.
	fill(0, 123, 12);
	arc(290, 345, 80, 155, -1.52, 1.52);
	
	// Left Square (Big)
	strokeWeight(5);
	line(55, 175, 290, 175);
	line(55, 510, 290, 510);
	rect(290, 175, 2, 335);
	
	// Small circle left
	fill(255);
	ellipse(220, 340, 20, 20);
	
	// Arc line around the big right square
	fill(0, 123, 12);
	arc(1060, 345, 80, 155, 1.57, 4.68);
	
	// Right Square (Big)
	line(1060, 175, 1285, 175);
	line(1060, 510, 1285, 510);
	rect(1060, 175, 2, 335);
	
	// Small circle (Right)
	fill(255);
	ellipse(1135, 340, 20, 20);
	
	// Left Square (Small)
	fill(0, 123, 12);
	line(55, 212, 152, 212);
	line(55, 470, 150, 470);
	rect(150, 215, 2, 255);
	
	// Right Square (Small)
	line(1200, 212, 1285, 211);
	line(1200, 470, 1285, 470);
	rect(1200, 215, 2, 255);
  
	// Corner circles
	// Upper Left Corner
	arc(60, 105, 50, 50, 0, 1.57);
	// Lower Left Corner
	arc(1282, 105, 50, 50, 1.57, 3.14);
	// Upper Right Corner
	arc(60, 587, 50, 50, 4.71, 6.28);
	// Lower Right Corner
	arc(1282, 587, 50, 50, 3.14, 4.71);
  
	// Make two goals
  
	fill(0,123, 12); // Colour
	stroke(255); // Outline
	strokeWeight(2); // Thickness of the goals
	rect(0, 242, 50, 200); // Left
	rect(1289, 245, 50, 200); // Right
   
	// Add nets to the goals
	
	// Left Goal
	for(var i = 10; i < 50; i += 10) {
		line(i, 441, i, 242);
	}
	for(var j = 247; j < 447; j += 10) {
		line(0, j, 49, j);
	}
 
	// Right Goal
	for(var k = 1299; k < 1339; k += 10) {
		line(k, 445, k, 247);
	}
	for(var l = 250; l < 450; l += 10) {
		line(1290, l, 1339, l);
	}
  
	// Display he soccer ball.
	image(imageBall, centerX, centerY, 20, 20);
	
	// Score Clock
	fill(255, 0, 0); // Text colour
	stroke(255, 0, 0); // Outline colour
	textSize(25); // Strength
	text(scoreA, 20, 115); // Home print
	fill(0, 0, 255); // Text colour
	stroke(0, 0, 255); // Outline colour
	text(scoreB, 1300, 115); // Guest print
  
	// Move the ball
	centerX = centerX + velocityX;
	centerY = centerY + velocityY;
  
	// Control the ball
	if (centerX-10 < 0 || centerX+10 >= width) {
		velocityX = -velocityX;
	}
  
	if (centerY+10 <= 120 || centerY+10 > height-100) {
		velocityY = -velocityY;
	}
}

function fansAndPublic() {
	/* Audience */
	fill(102, 92, 92); // Colour of the audience's sitting platforms
	stroke(102, 92, 92); // Border of the audience's platforms
	rect(0, 0, 1350, 97); // Platform 1
	rect(0, 593, 1350, 97); // Platform 2
 
	fill(255, 204, 0); // Colour of spectators' heads
	noStroke(); // No head outline
	row1.display(); // Display spectators in row 1
	row2.display(); // Display spectators in row 1
	row3.display(); // Display spectators in row 1
	row4.display(); // Display spectators in row 1
	row5.display(); // Display spectators in row 1
	row6.display(); // Display spectators in row 1
}

function scoreRecorder() {
	/* If statement that will record scores for home team */
	if ((centerX-10 >= 1289) && (centerX - 10 <= 1329)) {
		scoreA++;
		centerX = 70;
		centerY = 120;
		mySound.play();
	}

	//If home team scores 10 goals
	if (scoreA >= 10) {
		fill(255, 0, 0); // Colour
		stroke(255, 0, 0); // Outline
		textSize(25); // Size
		text("You Won!", 675, 340); 
	}
  
	// If statement that will record scores for guest team
	if (centerX-10 <= 50) {
		scoreB++;
		centerX = 1289;
		centerY = 120; 
		mySound.play();
	}
  
	// If guest team scores 10 goals
	if (scoreB >= 10) {
		fill(0, 0, 255); // Colour
		stroke(0, 0, 255); // Outline
		textSize(25); // Size
		text("You Lost!", 675, 340);
		noLoop();
	}
}

function draw() {
	background(0,123, 12); // Soccer field colour
	// Arena field function call
	arenaField();
   	// Fans and Public function call
	fansAndPublic();
	// Function that records score
	scoreRecorder();
	// Loop to show player teams
	for (var i = 0; i < home.length; i++) {
		home[i].move();
		home[i].display();
	}
	for (var j = 0; j < guest.length; j++) {
		guest[j].walk();
		guest[j].show();
	}
}

// Define the object for drawing audience.
function audience(ixp, iyp, iw, ih, id, it) {
	this.w = iw;
	this.xpos = ixp;
	this.h = ih;
	this.ypos = iyp;
	this.d = id;
	this.t = it;

	// Create function to display spectators
	this.display = function() {
		for (var i=0; i<this.t; i++) {
		ellipse(this.xpos+(i*(this.d+this.w)), this.ypos, this.w, this.h);
		}
	}
}

// Define object for drawing home team
function Home() {
	this.x = random(0, (width/2));
	this.y = random(100, (height - 120));
	
	// Prototype to move the team
	this.move = function() {
		if (keyIsDown(68)) {	// D to move right
			this.x += p1Vel;
		}
		if (keyIsDown(65)) {	// A to move left
			this.x -= p1Vel;
		}
		if (keyIsDown(87)) {	// W to move up
			this.y -= p1Vel;
		}
		if (keyIsDown(83)) { 	// S to move down
			this.y += p1Vel;
		}
		
		// Mechanism for ball kicking system
		if ((abs(centerX - this.x) >= 20) && (abs(centerY - this.y) >= 20)) {
			velocityX = -velocityX;
			velocityY = velocityY;
			mySound.stop();
		}
	};
	
	// Prototype to display the team
	this.display = function() {
		fill(255,205,148); 	// Body colour
		noStroke();
		ellipse(this.x + 7, this.y - 15, 20, 20);	// Head
		fill(255, 0, 0); 	// Dress colour
		rect(this.x, this.y, 15, 50);	// Body
		rect(this.x - 10, this.y, 5, 25); 	// Left arm
		fill(255,205,148); 	// Body colour
		rect(this.x - 10, this.y + 10, 5, 15); 	// Left arm (Uncovered)
		fill(255, 0, 0); 	// Dress colour
		rect(this.x + 20, this.y, 5, 25); 	// Right arm
		fill(255,205,148);	// Body colour
		rect(this.x + 20, this.y + 10, 5, 15); 	// Right arm (Uncovered)
		fill(255, 0, 0); 	// Dress colour
		rect(this.x, this.y + 55, 5, 25); 	// Left leg
		fill(255,205,148); 	// Body colour
		rect(this.x, this.y + 65, 5, 15); 	// Left leg (Uncovered)
		fill(255, 0, 0); 	// Dress colour
		rect(this.x + 10, this.y + 55, 5, 25); 	// Right leg
		fill(255,205,148); 	// Body colour
		rect(this.x + 10, this.y + 65, 5, 15); 	// Right leg (Uncovered)
	};
}

// Define object for drawing guest team
function Guest() {
	this.x = random(width/2, width);
	this.y = random(100, (height - 120));
	
	this.walk = function() {
		if (keyIsDown(76)) {
			this.x += p2Vel;
		}
		if (keyIsDown(74)) {
			this.x -= p2Vel;
		}
		if (keyIsDown(73)) {
			this.y -= p2Vel;
		}
		if (keyIsDown(75)) {
			this.y += p2Vel;
		}
		
		// Mechanism for ball kicking system
		if ((abs(centerX - this.x) >= 20) && (abs(centerY - this.y) >= 20)) {
			velocityX = -velocityX;
			velocityY = velocityY;
			mySound.stop();
		}
	};
	
	this.show = function() {
		fill(255,205,148); 	// Body colour
		noStroke();
		ellipse(this.x + 7, this.y - 15, 20, 20); 	// Head	
		fill(0, 0, 255); 	// Dress colour
		rect(this.x, this.y, 15, 50); 	// Body
		rect(this.x - 10, this.y, 5, 25); 	// Left arm
		fill(255,205,148); 	// Body colour
		rect(this.x - 10, this.y + 10, 5, 15); 	// Left arm (Uncovered)
		fill(0, 0, 255); 	// Dress colour
		rect(this.x + 20, this.y, 5, 25); 	// Right arm
		fill(255,205,148); 	// Body colour
		rect(this.x + 20, this.y + 10, 5, 15); 	// Right arm (Uncovered)
		fill(0, 0, 255); 	// Dress colour
		rect(this.x, this.y + 55, 5, 25); 	// Left leg
		fill(255,205,148); 	// Body colour
		rect(this.x, this.y + 65, 5, 15); 	// Left leg (Uncovered)
		fill(0, 0, 255); 	// Dress colour
		rect(this.x + 10, this.y + 55, 5, 25); 	// Right leg
		fill(255,205,148); 	// Body colour
		rect(this.x + 10, this.y + 65, 5, 15); 	// Right leg (Uncovered)
	};
}
