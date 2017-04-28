var myImage;
var xPos = 100;
var yPos = 200;
var speed = 3;

function preload() {
	myImage = loadImage("Car.PNG");
}

function setup() {
	var myCanvas = createCanvas(640, 480);
  	myCanvas.parent('Mouse');
}

function draw() {
	background(255);
	image(myImage, xPos, yPos, 100, 70);
	xPos = xPos + speed;
	if (xPos >= 640) {
		xPos = 200;
	}
}
