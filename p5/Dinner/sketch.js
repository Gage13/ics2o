function setup() {
  createCanvas(400, 400);
}

function draw() {
	background(186, 145, 20); // wooden table
	
	// Plate.
	fill(255, 255, 255);
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

	// peas
	strokeWeight(1);
	fill(53, 140, 66);
	ellipse(195, 115, 200, 130);

	// special peas.
	fill(36, 166, 82);

	// middle
	ellipse(111,111,20,20);
	ellipse(155, 111, 20, 20);
	ellipse(195, 111, 20, 20);
	ellipse(235, 111, 20, 20);
	ellipse(275, 111, 20, 20);

	// lower.
	ellipse(155, 150, 20, 20);
	ellipse(195, 150, 20, 20);
	ellipse(235, 150, 20, 20);

	// upper
	ellipse(155, 70, 20, 20);
	ellipse(195, 70, 20, 20);
	ellipse(235, 70, 20, 20);
}
