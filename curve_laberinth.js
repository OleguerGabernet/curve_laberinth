var c = {
	x1: 0,
	y1: 0,	
	px1:0,
	py1:0,
	px2:0,
	py2:0,
	x2: 0,
	y2: 0,
};

function setup() {
	createCanvas(400, 400);

	c.x1 = width/2;
	c.y1 = 0;

	c.px1 = width/2;
	c.py1 = height/4;

	c.px2 = 3 * width/4;
	c.py2 = height/2;

	c.x2 = width;
	c.y2 = height/2;
}

function draw() {
	background(220);
	stroke(0);
	strokeWeight(2);
	noFill();


	
	arc(width, 0, width, height, HALF_PI, PI)

	arc(0, height, width, height, PI+HALF_PI, TWO_PI);


}

function tile(x, y, w, h, orientation){



}