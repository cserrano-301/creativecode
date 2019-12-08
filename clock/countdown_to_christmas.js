//Code from P5jS - https://p5js.org/reference/#/p5/preload
let flash = [];
let img;
let c;
function preload() {
  // preload() runs once
  // load images
  img = loadImage('Christmas1.jpg');
  
}


function setup() {
  createCanvas(600, 700);
  for (i = 1; i <2; i++) {
    flash.push({
        x: random(100) + 150,
        y: random(180) + 120,
        color: random(200),
        s: random(5)
     });
  }
  
  // setup() waits until preload() is done
  img.loadPixels();
  
}

function draw() {
  background(img);
  mon = month()
  d = day()
  y = year()
  fill(0);
  square(45,100,85,15);

  
  h = hour()
  //Using to convert time to UTC from Eastern Time
  //adjust UTC time to account for daylight savings
  newHourUTC = h+5
  
  m = minute()
  newMinute = minute()
  //Had trouble figuring out how to get AM and PM into the time   
  //Found at - https://googlecreativelab.github.io/coder-  projects/projects/digital_clock/
  // Let's set the AM and PM meridiem and 
  // 12-hour format
  var meridiem = "";  // Default is AM
  if (h >= 12) {
    h = h - 12;
    meridiem = "PM";
  }   else {
    meridiem = "AM";
  }
  // 0 AM and 0 PM should read as 12
  if (h === 0) {
    h = 12;    
  }
  if ((minute().toString().length) < 2) {
    newMinute = 0 + minute().toString()}
  
  
  textAlign(LEFT, TOP);{
  textSize(18);
    fill(50,48,180);
  text("Christmas Countdown", 5, 20, width,90);
  text("Today is: " + mon + " / " + d + " / " + y, 5,40,width,60)   
  text("The time is: " + h + ":" + newMinute + meridiem, 5, 60, width,90);
    
  } 

  {
    text ("Days until Christmas!", 5, 200, width,90);
    textSize(55);
    textStyle(BOLD);
    fill(0,48,180);
        text(25 - d, 55,120,width, 125);
    
//flashing mode code help found at: https://codepen.io/lislis/pen/GOVNKb      
  }
  colorMode(HSL, 260, 100, 100, 1);{
  for (i = 0; i < flash.length; i++) {
    flash[i].color = flash[i].color % 80 + 0.3;
    flash[i].s = flash[i].s % .9 + 0.15;
    stroke(flash[i].color, 88, 168, 99);
    strokeWeight(flash[i].s);
    fill(flash[i].color, 88, 168, 99);
  }
  colorMode(RGB,1,158,655);
    
  }
  
}
