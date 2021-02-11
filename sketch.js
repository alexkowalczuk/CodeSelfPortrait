// Global variable needed for position x and y
var gDebugMode = true;

// Setup code goes here
function setup() {
  createCanvas(1200, 800); //size of the canvas
  textSize(40); //font size of our text
  textAlign(CENTER); //align of the text
 }


// Draw code goes here
function draw() {
  background(255, 255, 230);
  face();
  ears();
  hair();
  neck();
  nose();
  eyebrows();
  mouth();
  eyes();
  shirt();

  textSize(40);
  fill('pink');
  text('Alex Kowalczuk Self Portrait', 300, 50);

  // if statement for our x & y position 
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
  //noStroke()
  fill(247, 221, 212);
  ellipse(232, 335, 40, 70);
  ellipse(488, 335, 40, 70);
}

function nose() {
  fill(247, 221, 155);
  triangle(360, 320, 340, 380, 380, 380);
}

function eyes() {
  //Outside (white parts)
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
  //noStroke()
  fill(32, 19, 19);
  arc(360, 300, 250, 270, PI+.3, -.3, PI); //main half circle for hair
  quad(240, 260, 214, 329, 250, 297, 300, 248); //left side hair on the ear
  quad(480, 261, 501, 332, 479, 308, 450, 260); //right side hair on the ear
  quad(472, 250, 500, 305, 480, 297, 442, 255); //^
  triangle(235, 280, 230, 252, 265, 215); //left side bump
  triangle(473, 246, 490, 272, 489, 295); // right side bump
  triangle(452, 216, 480, 230, 478, 262);
  triangle(424, 191, 456, 203, 459, 239);
}

function mouth() {
   noStroke()
   fill(255, 102, 102);
   arc(360, 425, 90, 45, 0, PI);
}

//rect(322, 500, 70, 75, 20);

function shirt() {
  fill(115, 194, 251)
  rect(255, 561, 205, 240, 20);
  fill(247, 221, 212);
  triangle(322, 560, 357, 587, 392, 560);

  //pocket
  fill("pink")
  quad(300, 730, 415, 730, 435, 783, 280, 783);

}

/* x & y position printer
function drawDebugInfo() {
	fill(0);
  	text("X: " + mouseX + "   Y: " + mouseY, 400, height - 20);
}*/
