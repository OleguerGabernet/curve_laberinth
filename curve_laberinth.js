
var div = 10;
var w_dim;
var h_dim;

function setup() {
	createCanvas(800, 800);
	background(245);

	w_dim = width/div;
	h_dim = height/div;
	var x = 0;
	var y = 0;
}

function draw() {
	background(220);
	stroke(0);
	strokeWeight(2);
	noFill();

	for (let i = 0; i < div; i++) {
		for (let j = 0; j < div; j++) {
			x = j * w_dim;
			y = i * h_dim;
			var r = int(random(2));

			tile(x,y, w_dim, h_dim, r);

		}
	}


	//tile(0,0, width/2, height/2, false);
	

	noLoop();
}

function tile(x, y, w, h, orientation){
	translate(x,y);

	if (orientation == true){
		arc(w, 0, w, h, HALF_PI, PI)
		arc(0, h, w, h, PI+HALF_PI, TWO_PI);
	}
	else {
		arc(0, 0, w, h, 0, HALF_PI)
		arc(w, h, w, h, PI, PI+HALF_PI);
	}

	translate(-x,-y);
}