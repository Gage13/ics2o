/* Example of drawing a house
using JavaScript and its variables
Dragi Plakalovic 2017-03-10
Written on KhanAcademy */

function setup() {
  createCanvas(400, 400); // Canvas size.
 }
 
function draw() {
  var posX = 100;
  var posY = 100;
  var houseWidth = 100;
  
  // Background.
  background(112, 192, 235);
  noStroke();

  // Sun.
  fill(247, 255, 0);
  ellipse(posX + 225, posY - 40, houseWidth - 10, houseWidth - 10);

  // Clouds.
  fill(255, 255, 255);

  /* Cloud One */
  ellipse(posX, posY, houseWidth - 65, houseWidth - 65);
  ellipse(posX - 30, posY, houseWidth - 50, houseWidth - 50);
  ellipse(posX - 60, posY, 35, 35);

  /* Cloud Two. */
  ellipse(posX + 60, posY - 60, houseWidth - 65, houseWidth - 65);
  ellipse(posX + 30, posY - 60, houseWidth - 50, houseWidth - 50);
  ellipse(posX, posY - 60, houseWidth - 65, houseWidth - 65);

  // House
  fill(255, 0, 0);
  triangle(posX - (houseWidth - 60), posY + (houseWidth - 13), posX + houseWidth + 130, posY + (houseWidth - 13), posX + (houseWidth - 5), posY - 17); // Roof.
  
  fill(255, 255, 255);
  rect(posX - 20, posY + 87, houseWidth + 130, houseWidth + 62); // Base

  fill(21, 122, 189);
  rect(posX, posY + 106, houseWidth - 30, houseWidth - 50); // Left Window
  rect(posX + 120, posY + 106, houseWidth - 30, houseWidth - 50); // Right Window

  fill(102, 51, 0);
  rect(posX + 69, posY + 167, houseWidth - 50, houseWidth - 18); // Door

  // Ground
  fill(33, 252, 13);
  rect(posX - posX, posY + 250, houseWidth + 299, houseWidth - 50);
}
