/* Example of drawing a house
using JavaScript and its variables
Dragi Plakalovic 2017-03-10
Written on KhanAcademy */

var coordY = 56; // Clouds.
var coodX = 70;  // Rest of the house.

function setup() {
  createCanvas(400, 400); // Canvas size.
 }
 
function draw() {
  // Background.
  background(112, 192, 235);
  noStroke();

  // Sun.
  fill(247, 255, 0);
  ellipse(325, 60, 90, 90);

  // Clouds.
  fill(255, 255, 255);

  /* Cloud One */
  ellipse(coodX + 30, 100, 35, 35);
  ellipse(coodX, 100, 50, 50);
  ellipse(coodX - 30, 100, 35, 35);

  /* Cloud Two. */
  ellipse(coodX + 90, 40, 35, 35);
  ellipse(coodX + 60, 40, 50, 50);
  ellipse(coodX + 30, 40, 35, 35);

  // House
  fill(255, 0, 0);
  triangle(60, coordY + 131, 330, coordY + 131, 195, coordY + 27); // Roof

  fill(255, 255, 255);
  rect(80, coordY + 131, 230, 162); // Base

  fill(21, 122, 189);
  rect(100, coordY + 150, 70, 50); // Left Window
  rect(220, coordY + 150, 70, 50); // Right Window

  fill(102, 51, 0);
  rect(169, coordY + 211, 50, 82); // Door

  // Ground
  fill(33, 252, 13);
  rect(0, 350, 399, 50);
}
