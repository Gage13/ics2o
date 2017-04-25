function setup() {
  var myCanvas = createCanvas(640, 480);
  myCanvas.parent('Mouse');
}

function draw() {

}

function mouseMoved() {
	background(255);
	// Draw the car body
	noStroke();
	fill(35, 235, 250);
	rect(mouseX, 200, 100, 20);
	rect(mouseX + 15, 178, 70, 40);

	// draw the wheels
	fill(77, 66, 66);
	ellipse(mouseX + 25, 221, 26, 26);
	ellipse(mouseX + 75, 221, 26, 26);
}

function mouseClicked() {
	background(255);
	// Draw the car body
	noStroke();
	fill(35, 235, 250);
	rect(mouseX, 200, random(100), random(20));
	rect(mouseX + 15, 178, random(70), random(40));

	// draw the wheels
	fill(77, 66, 66);
	ellipse(mouseX + 25, 221, random(26), random(26));
	ellipse(mouseX + 75, 221, random(26), random(26));
}