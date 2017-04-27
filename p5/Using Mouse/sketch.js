var myImage;
var xPos = 200;
var yPos = 200;
var speed = 3;

function preload() {
	myImage = loadImage("Car.png");
}

function setup() {
	var myCanvas = createCanvas(640, 480);
  	myCanvas.parent('Mouse');
}

function draw() {
	image(myImage, xPos, yPos);
	xPos = xPos + speed;
	if (xPos >= 640) {
		xPos = 200;
	}
}
