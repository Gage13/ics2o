/* Example of drawing a house
using JavaScript and its variables
Dragi Plakalovic 2017-03-10
Written on KhanAcademy */

function setup() {
  createCanvas(720, 400); // Canvas size.
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
  ellipse(posX*3 + 60, posY*0.6, houseWidth*0.9, houseWidth*0.9);

  // Clouds.
  fill(255, 255, 255);

  /* Cloud One */
  ellipse(posX, posY, houseWidth*0.35, houseWidth*0.35);
  ellipse(posX*0.70, posY, houseWidth/2, houseWidth/2);
  ellipse(posX*0.40, posY, houseWidth*0.35, houseWidth*0.35);

  /* Cloud Two. */
  ellipse(posX*1.60, posY*0.40, houseWidth*0.35, houseWidth*0.35);
  ellipse(posX*1.30, posY*0.40, houseWidth/2, houseWidth/2);
  ellipse(posX, posY*0.40, houseWidth*0.35, houseWidth*0.35);
  
  /* Cloud Three */
  ellipse(posX*6.15, posY, houseWidth*0.35, houseWidth*0.35);
  ellipse(posX*6.45, posY, houseWidth/2, houseWidth/2);
  ellipse(posX*6.75, posY, houseWidth*0.35, houseWidth*0.35);

  /* Cloud Four. */
  ellipse(posX*6.10, posY*0.40, houseWidth*0.35, houseWidth*0.35);
  ellipse(posX*5.80, posY*0.40, houseWidth/2, houseWidth/2);
  ellipse(posX*5.50, posY*0.40, houseWidth*0.35, houseWidth*0.35);

  /* House number 1 */
  
  fill(255, 0, 0);
  triangle(posX - (houseWidth*0.4), posY + (houseWidth*0.87), posX + (houseWidth*2.3), posY + (houseWidth*0.87), posX + (houseWidth*0.95), posY*0.83); // Roof.
  
  fill(255, 255, 255);
  rect(posX*0.8, posY*1.87, houseWidth*2.3, houseWidth*1.62); // Base

  fill(21, 122, 189);
  rect(posX, posY*2 + 6, houseWidth*0.7, houseWidth/2); // Left Window
  rect(posX*2 + 20, posY*2 + 6, houseWidth*0.7, houseWidth/2); // Right Window
  
  fill(102, 51, 0);
  rect(posX*1.69, posY*2 + 67, houseWidth/2, houseWidth*0.82); // Door
  
  /* House number 2 */
  
  fill(255, 255, 255);
  rect(posX*4 + 20, posY*1.87, houseWidth*2 + 30, houseWidth*1.62); // Base
  
  /* Windows */
  fill(21, 122, 189);
  rect(posX*4 + 40, posY*2 + 6, houseWidth*0.7, houseWidth/2); // Left Window
  rect(posX*5 + 60, posY*2 + 6, houseWidth*0.7, houseWidth/2); // Right Window
  
  /* Roof */
  
  fill(255, 0, 0);
  triangle(posX*4, posY*1.87, posX*6 + 70, posY*1.87, houseWidth*5 + (houseWidth/4), houseWidth*0.87);
  
  /* Door */
  
  fill(102, 51, 0);
  rect(posX*5 + 9, posY*2  + 67, houseWidth/2, houseWidth*0.82);

  // Ground
  fill(33, 252, 13);
  rect(posX*0, posY*3 + 50, houseWidth*8, houseWidth/2);
}
