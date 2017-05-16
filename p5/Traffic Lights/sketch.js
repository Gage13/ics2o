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
	
	if (beginTimeCount === 0) { // at the beginning of the sketch have the following:
		lights(); //create traffic lights
		green1On(); //have green light #1 on
		green2Off(); //have green light #2 off
		yellow1Off(); //have yellow light #1 off
		yellow2Off(); //have yellow light #2 off
		red1Off(); //have red light #1 off
		red2On(); //have red light #2 on
		beginTimeCount = millis(); //start timer
	}
	if ((millis() - beginTimeCount) >= 10000 ) { //when timer reaches 10 seconds do the following:
		green1Off(); //turn green light #1 off
		yellow1On(); //turn yellow light #1 on
	}
	if ((millis() - beginTimeCount) >= 13000 ) { //when timer reaches 13 seconds do the following:
		red1On(); //turn red light #1 on
		yellow1Off(); //turn yellow light #1 off
		red2On(); //turn red light #2 on
	}
	if ((millis() - beginTimeCount) >= 15000 ) { //when timer reaches 15 seconds do the following:
		red2Off(); //turn red light #2 off
		green2On(); //turn green light #2 on
	}
	if ((millis() - beginTimeCount) >= 25000 ) { //when timer reaches 25 seconds do the following:
		green2Off (); //turn green light #2 off
		yellow2On (); //turn yellow light #2 on
	}	
	if ((millis() - beginTimeCount) >= 28000 ) { //when timer reaches 28 seconds do the following:
		yellow2Off(); //turn yellow light # 2 off
		red20n(); //turn red light #2 on
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
