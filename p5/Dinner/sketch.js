function setup() {
  createCanvas(400, 400);
}

function draw() {
	background(186, 145, 20); // wooden table
	ellipse(200, 200, 350, 350); // plate
	ellipse(200, 200, 300, 300); // bottom

	// Food (steak).
	fill(153, 76, 0);
	rect(95, 180, 210, 150, 140);

	// lines of roasting a steak.
	strokeWeight(6);
	line(175, 200, 240, 300);
	line(130, 200, 190, 300);
	line(225, 200, 290, 300);

	// potato 1
	noStroke();
	fill(194, 152, 45);
	arc(180, 90, 160, 150, 1, 180);

	fill(255, 255, 255);
	arc(180, 90, 160, 80, 1, 180);

}
