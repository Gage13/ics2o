/* Bouncing ball
Dragi Plakalovic
2017-13-04 */

// Score variables
var scoreA = 0;
var scoreB = 0;

// Position and speed variables
var centerX = 200;
var centerY = 300;
var velocityX = 0;
var velocityY = 0;

/* Faces of the audience */
var row1; 
var row2; 
var row3; 
var row4; 
var row5; 
var row6;

function setup() {
  createCanvas(1350, 680); // Canvas
  
  row1 = new audience(18, 20, 10, 20, 20, 45); // One row
  row2 = new audience(18, 50, 10, 20, 20, 45);
  row3 = new audience(18, 80, 10, 20, 20, 45);
  row4 = new audience(18, 605, 10, 20, 20, 45);
  row5 = new audience(18, 635, 10, 20, 20, 45);
  row6 = new audience(18, 666, 10, 20, 20, 45);
}

function draw() {
  background(0,123, 12);
  
  /* Audience */
  fill(102, 92, 92);
  stroke(102, 92, 92);
  rect(0, 0, 1350, 97);
  rect(0, 593, 1350, 97);
 
  fill(255, 204, 0);
  noStroke();
  row1.display();
  row2.display();
  row3.display();
  row4.display();
  row5.display();
  row6.display();
  
  /* Score variables */
  fill(255);
  stroke(255); // Text colour
  strokeWeight(2); // Strength
  text(scoreA, 20, 115); // scoreA print
  text(scoreB, 1300, 115); // scoreB print
  
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
  strokeWeight(2);
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
  
  //Draw he soccer ball.
  fill(255);
  ellipse(centerX, centerY, 20, 20);
  
  // Move the ball
  centerX = centerX + velocityX;
  centerY = centerY + velocityY;
  
  /* Control the ball */
  if (centerX-20 < 0 || centerX+20 >= width) {
    velocityX = -velocityX;
  }
  
  if (centerY-20 < 100 || centerY+20 >= height-100) {
    velocityY = -velocityY;
  }
}

function mouseClicked() {
  // Position the ball based on mouse coordinates
  centerX = mouseX;
  centerY = mouseY;
  velocityX = round(centerX/100);
  velocityY = round(centerY/100);
}


function audience(ixp, iyp, iw, ih, id, it) {
   this.w = iw;
   this.xpos = ixp;
   this.h = ih;
   this.ypos = iyp;
   this.d = id;
   this.t = it;
 
  this.display = function() {
    for (var i=0; i<this.t; i++) {
      ellipse(this.xpos+(i*(this.d+this.w)), this.ypos, this.w, this.h);
    }
  }
}

