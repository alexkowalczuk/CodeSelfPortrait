var gDebugMode = true;

// Setup code goes here
function setup() {
  createCanvas(1200, 800);
  textSize(40); //font size of our text
  textAlign(CENTER); //align of the text
 }


// Draw code goes here
function draw() {
  background(255, 255, 230); //color of the background
  face();
  //hair();
  neck();
  ears();
  nose();
  eyebrows();
  mouth();
  eyes();
  shirt();

  if( gDebugMode == true ) {
  	drawDebugInfo();
  }
}

function face() {
  noStroke()
  fill(247, 221, 212);
  ellipse(360, 355, 245, 320);
}

function neck() {
  fill(247, 221, 212)
  rect(322, 500, 70, 75, 20);
}

function ears() {
  fill(247, 221, 212);
  ellipse(232, 335, 40, 70);
  ellipse(488, 335, 40, 70);
}

function nose() {
  fill(247, 221, 155);
  triangle(360, 330, 340, 380, 380, 380);
}

function eyes() {
  stroke(21, 19, 19);
  strokeWeight(3)
  fill(255);
  ellipse(300, 320, 49, 29);
  ellipse(420, 320, 49, 29);

  //Eyeballs
  fill(32, 19, 19);
  ellipse(300, 320, 28, 25);
  ellipse(420, 320, 28, 25);

  //Eyeballs - inside
  noStroke()
  fill(255)
  ellipse(305, 315, 8, 8);
  ellipse(425, 315, 8, 8);
}

function eyebrows() {
  stroke(21, 19, 19);
  strokeWeight(7);
  noFill();
  arc(300, 300, 55, 18, PI, TWO_PI, OPEN);
  arc(420, 300, 55, 18, PI, TWO_PI, OPEN);

}

function hair() {
  noStroke()
  fill(32, 19, 19);
  arc(260, 260, 300, 380, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
}

function mouth() {
   //r = r + .1
   //rotate(r)
   //translate(-width/2, -height/2);
   noStroke()
   fill(255, 102, 102);
   arc(360, 425, 90, 45, 0, PI);
}

function shirt() {
  fill(115, 194, 251)
  rect(255, 561, 205, 240, 20);
}

function drawDebugInfo() {
	fill(0);
  	text("X: " + mouseX + "   Y: " + mouseY, 400, height - 20);
}
