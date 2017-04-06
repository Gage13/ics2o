/* Example of drawing a house
using JavaScript and its variables
Dragi Plakalovic 2017-03-10
Written on KhanAcademy */

// Creates canvas for the drawing.
function setup() {
  createCanvas(730, 400); // Canvas size.
 }

// Function that draws on the canvas.
function draw() {
  
  // Variables used in this drawing
  var posX = 100;
  var posY = 100;
  var houseWidth = 100;
  
  // Background.
  background(112, 192, 235);
  noStroke();

  // Sun.
  fill(247, 255, 0);
  ellipse(360, 60, 90, 90);

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
  
  /* Cloud Three */
  ellipse(615, 100, 35, 35);
  ellipse(645, 100, 50, 50);
  ellipse(675, 100, 35, 35);

  /* Cloud Four. */
  ellipse(610, 40, 35, 35);
  ellipse(580, 40, 50, 50);
  ellipse(550, 40, 35, 35);


  /* House number 1 */
  
  // roof
  fill(255, 0, 0);
  triangle(posX - (houseWidth*0.4), posY + (houseWidth*0.87), posX + (houseWidth*2.3), posY + (houseWidth*0.87), posX + (houseWidth*0.95), posY*0.83); // Roof.
  
  fill(255, 255, 255);
  var baseSize = houseWidth*2.3;
  rect(posX - houseWidth*0.2, posY + houseWidth*0.87, baseSize, baseSize*0.704); // Base

  fill(21, 122, 189);
  var windowSize = houseWidth/2;
  rect(posX, posY*2 + houseWidth*0.06, windowSize*1.4, windowSize); // Left Window
  rect(posX + (houseWidth*1.20), posY*2 + houseWidth*0.06, windowSize*1.4, windowSize); // Right Window

  fill(102, 51, 0);
  var doorSize = houseWidth/2;
  rect(posX + houseWidth*0.69, posY*2 + houseWidth*0.67, doorSize, doorSize*1.64); // Door
  
  /* House number 2 */
  
  fill(255, 255, 255);
  var baseWidth = houseWidth*2.8;
  rect(posX*4 + houseWidth*0.2, posY + houseWidth*0.87, baseWidth, baseWidth*0.579); // Base
  
  fill(255, 0, 0);
  triangle(posX*4, posY + houseWidth*0.87, posX*4 + (houseWidth*3.2),  posY + (houseWidth*0.87), posX*4 + (houseWidth*1.55), posY*0.83);
  
  /* Windows */
  fill(21, 122, 189);
  var window2Size= houseWidth*0.7;
  rect(posX*4 + (houseWidth*0.535), posY*2 + houseWidth*0.06, window2Size, window2Size*0.714); // Left Window
  rect(posX*4 + (houseWidth*1.95), posY*2 + houseWidth*0.06, window2Size, window2Size*0.714); // Right Window
  
  fill(102, 51, 0);
  var door2Size = houseWidth/2;
  rect(posX*4 + houseWidth*1.34, posY*2 + houseWidth*0.67, door2Size, door2Size*1.64); // Door

  /* Ground */
  
  fill(33, 252, 13);
  rect(0, 350, 800, 50);
}
