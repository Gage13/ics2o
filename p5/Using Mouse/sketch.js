var myImage;
var xPos = 100;
var yPos = 200;
var speed = 3;
var size = 100;

function preload() {
	myImage = loadImage("Car.PNG");
}

function setup() {
	var myCanvas = createCanvas(640, 480);
  	myCanvas.parent('Mouse');
}

function draw() {
	background(255);
	image(myImage, xPos, yPos, size, size*0.7);
	xPos = xPos + speed;
	if (xPos >= 640) {
		xPos = 200;
	}
}

function mouseIsPressed() {
	size = random(10, 120);
}
