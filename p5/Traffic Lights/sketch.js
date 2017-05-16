/* Traffic Lights Animation in JavaScript based on Arduino code provided 
Made by: Gage13
Date: 2017-05-16 */

// Variables that hold positions of the traffic lights
var xPos = 95;
var yPos = 115;
var light = 40;
var beginTimeCount = 0; // Variable that is used 

function setup() {
  var myCanvas = createCanvas(450, 480);
	myCanvas.parent('Traffic_Lights');
	
}

function draw() {
    background(39, 245, 70); // Background of the sketch
    
	// Traffic Lights Poles
    fill(237, 229, 9); // Top
    rect(60, 90, 70, 160); // Left
    rect(260, 90, 70, 160); // Right
    fill(0); // Bottom
    rect(80, 250, 30, 100); // Left 
    rect(280, 250, 30, 100); // Right
	
	if (beginTimeCount === 0) {
		lights();
		red2On();
		yellow2Off();
		green2Off();
		red1Off();
		yellow1Off();
		green1Off();
		beginTimeCount = millis();
	}
	
	if ((millis() - beginTimeCount) >= 1000) {
		red2Off();
		green1On();
	}
	
	if ((millis() - beginTimeCount) >= 11000) {
		green1Off();
		yellow1On();
	}
	
	if ((millis() - beginTimeCount) >= 3000) {
		yellow1Off();
		red1On();
	}
	
	// Traffic lights 2 sequence
	if ((millis() - beginTimeCount) >= 1000) {
		red2On();
		green2Off();
	}
	
	if ((millis() - beginTimeCount) >= 3000) {
		red2Off();
		green2On();
	}
	
	if ((millis() - beginTimeCount) >= 11000) {
		green2Off();
		yellow2On();
	}
	
	if ((millis() - beginTimeCount) >= 2000) {
		yellow2Off();
		red2On();
	}
	
	// Create functions
	function red1On() {
		fill(255, 0, 0);
		ellipse(xPos, yPos, light, light);
	}
	
	function red2On() {
		fill(255, 0, 0);
		(xPos + 200, yPos, light, light);
	}
	
	function red1Off() {
		fill(140, 0, 0);
		ellipse(xPos, yPos, light, light);
	}
	
	function red2Off() {
		fill(140, 0, 0);
		(xPos + 200, yPos, light, light);
	}
	
	function yellow1On() {
		fill(255, 255, 0);
		(xPos, yPos +55, light, light);
	}
	
	function yellow2On() {
		fill(255, 255, 0);
		(xPos + 200, yPos +55, light, light);
	}
	
	function yellow1Off() {
		fill(145, 145, 0);
		(xPos, yPos +55, light, light);
	}
	
	function yellow2Off() {
		fill(145, 145, 0);
		(xPos + 200, yPos +55, light, light);
	}
	
	function green1On() {
		fill(50, 255, 0);
		ellipse(xPos, yPos + 110, light, light);
	}
	
	function green2On() {
		fill(50, 255, 0);
		ellipse(xPos+ 200, yPos + 110, light, light);
	}
	
	function green1Off() {
		fill(85, 158, 66);
		ellipse(xPos, yPos + 110, light, light);
	}
	
	function green2Off() {
		fill(85, 158, 66);
		ellipse(xPos+ 200, yPos + 110, light, light);
	}
	
	function lights() {
		fill(237, 229, 9);
		rect(60, 90, 70, 160);
		rect(260, 90, 70, 160);
		fill(0);
		rect(80, 250, 30, 100);
		rect(280, 250, 30, 100);
	}
}
