//mash up of ideas: credit to Coding train 2.5 and p5js reference guide - parameters adjusted

let a = 0.0;
let s = 0.0;


var col = {
  r: 219,
  g: 210,
  b: 25
}


function setup() {
  createCanvas(800, 800, WEBGL);
  //https://p5js.org/reference/#/p5/rectMode - adjusted parameters
  rectMode(CENTER);
  col.r = random (150,218);
  col.g = random (60,130);
  col.b = random (10,22,0);
}

function draw() {
  background(0);
  rectMode(CENTER);

  //https://p5js.org/examples/transform-scale.html
  a = a + 0.02;
  s = cos(a) * 1.5;
  translate(width / 2, height / 2);
  scale(s);
  rect(0, 0, 400, 400);
  translate(75, 0);
  scale(s);
  rect(0, 0, 400, 400);
  
  //p5js reference - 3d
  rotateX(millis() / 1000);
  rotateX(PI / -4);
  //blue boxes
  stroke(77,102,220);
  box(355);
  let rad = millis() / 1200;
  // Set rotation angles
  let ct = cos(rad);
  let st = sin(rad);
  // Matrix for rotation around the Y axis
  applyMatrix(  ct, 0.0,  st,  0.0,
               0.0, 1.0, 0.0,  0.0,
               -st, 0.0,  ct,  0.0,
               0.0, 0.0, 0.0,  1.0);
  rotateX(millis() / 1000);
  rotateY(PI / 4);
  box(250);
  rotateX(PI / 8);
  stroke(255);
  box(325);
  fill(col.r,col.g,col.b,25);
  stroke(195,120,163);
  rotateX(PI / 4);
  
  //p5js reference
  specularMaterial(250,150);
  box(125);
  stroke(255);
  rotateX(millis() / 1000);
  rotateY(PI / 6);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.06);
  
  
  col.r = random (250,218);
  col.g = random (30,10);
  col.b = random (150,225,200);
  //shape of inside sphere
  noFill();
  
  sphere(50,5,4);
    
  //sphere color blue
  stroke(85,175,255);
  fill(col.r,col.g,col.b,175);
  sphere(24,24,15);
  noStroke();
  fill(col.r,col.g,col.b,10);
  
}
