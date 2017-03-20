/* Example of drawing a house
using JavaScript and its variables
Dragi Plakalovic 2017-03-10
Written on KhanAcademy */

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
  ellipse(100, 100, 35, 35);
  ellipse(70, 100, 50, 50);
  ellipse(40, 100, 35, 35);

  /* Cloud Two. */
  ellipse(160, 40, 35, 35);
  ellipse(130, 40, 50, 50);
  ellipse(100, 40, 35, 35);

  // House
  fill(255, 0, 0);
  triangle(60, 187, 330, 187, 195, 83); // Roof

  fill(255, 255, 255);
  rect(80, 187, 230, 162); // Base

  fill(21, 122, 189);
  rect(100, 206, 70, 50); // Left Window
  rect(220, 206, 70, 50); // Right Window

  fill(102, 51, 0);
  rect(169, 267, 50, 82); // Door

  // Ground
  fill(33, 252, 13);
  rect(0, 350, 399, 50);
}
