/* Bouncing ball
Dragi Plakalovic
2017-13-04 */

// Score variables
var scoreA = 0; // Initial home team score
var scoreB = 0; // Initial guest team score

// Position and speed variables
var centerX = 70; // Soccer Ball Initial Position X
var centerY = 120; // Soccer Ball Initial Position Y
var velocityX = 5; // Initial X speed of the ball
var velocityY = 5; // Initial Y speed of the ball

/* Faces of the audience */
var row1; // Row 1 audience
var row2; // Row 2 audience
var row3; // Row 3 audience
var row4; // Row 4 audience
var row5; // Row 5 audience
var row6; // Row 6 audience

/* function preload() {
	mySound = loadSound('Soccer Cheering'); 
} */

function setup() {
  var myCanvas = createCanvas(1350, 680); // Canvas
  myCanvas.parent('SoccerGame'); // Position on the webpage
  /* mySound.play();
  mySound.setVolume(0.1); */
  
  row1 = new audience(18, 20, 10, 20, 20, 45); // (1-4) Graphic details of the audience's heads; (5-6) Distance between heads' centres and number of heads for row 1.
  row2 = new audience(18, 50, 10, 20, 20, 45); // (1-4) Graphic details of the audience's heads; (5-6) Distance between heads' centres and number of heads for row 2.
  row3 = new audience(18, 80, 10, 20, 20, 45); // (1-4) Graphic details of the audience's heads; (5-6) Distance between heads' centres and number of heads for row 3.
  row4 = new audience(18, 605, 10, 20, 20, 45); // (1-4) Graphic details of the audience's heads; (5-6) Distance between heads' centres and number of heads for row 4.
  row5 = new audience(18, 635, 10, 20, 20, 45); // (1-4) Graphic details of the audience's heads; (5-6) Distance between heads' centres and number of heads for row 5.
  row6 = new audience(18, 666, 10, 20, 20, 45); // (1-4) Graphic details of the audience's heads; (5-6) Distance between heads' centres and number of heads for row 6.
}

function draw() {
  background(0,123, 12); // Soccer field colour
   
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
  
  /* Score Clock */
  fill(255); // Text coloue
  stroke(255); // Outline colour
  strokeWeight(2); // Strength
  text(scoreA, 20, 115); // Home print
  text(scoreB, 1300, 115); // Guest print
  
  // Draw field lines
  /* Huge play rect lines */
  fill(0, 123, 12); 
  strokeWeight(5);
  rect(55, 100, 1230, 490);
  /* Centre (Circle) */
  fill(0, 123, 12);
  stroke(255);
  strokeWeight(5);
  ellipse(670, 340, 200, 200);
  /* Centre Line */
  fill(255);
  strokeWeight(5);
  rect(670, 100, 2, 485);
  /* Left Square (Big) */
  strokeWeight(5);
  line(55, 175, 290, 175);
  line(55, 510, 290, 510);
  rect(290, 175, 2, 335);
  /* Right Square (Big) */
  line(1060, 175, 1285, 175);
  line(1060, 510, 1285, 510);
  rect(1060, 175, 2, 335);
  
  
  // Make two goals
  
  fill(0,123, 12); // Colour
  stroke(255); // Outline
  strokeWeight(2); // Thickness of the goals
  rect(0, 225, 50, 200); // Left
  rect(1289, 225, 50, 200); // Right
  
  /* Add nets to the goals */
  // Left Goal
  for (var i = 10; i < 50; i += 10) {
    line(i, 424, i, 225);
  }
  for (var j = 230; j < 430; j += 10) {
    line(0, j, 49, j);
  }
  
  // Right Goal
  for (var k = 1289; k < 1339; k += 10) {
    line(k, 425, k, 227);
  }
  for (var l = 230; l < 430; l += 10) {
    line(1290, l, 1339, l);
  }
  
  // Draw he soccer ball.
  fill(255);
  ellipse(centerX, centerY, 20, 20);
  
  // Move the ball
  centerX = centerX + velocityX;
  centerY = centerY + velocityY;
  
  /* Control the ball */
  if (centerX-10 < 0 || centerX+10 >= width) {
    velocityX = -velocityX;
  }
  
  if (centerY-10 < 100 || centerY+10 >= height-100) {
    velocityY = -velocityY;
  }
  
  // If statement that will record scores for home team
  if (centerX-10 >= 1289) {
	  scoreA++;
	  centerX = 70;
	  centerY = 120;
  }
  
  if (scoreA >= 10) {
	  text("You Won!", 675, 340);
  }
}

function mouseClicked() {
	playerFoot();
}

var playerFoot = function() {
	var posX = mouseX;
	var posY = mouseY;
	
	ellipse(posX, posY, 30, 30);
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