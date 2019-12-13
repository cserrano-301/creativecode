//Code from P5jS - https://p5js.org/reference/#/p5/preload

let img;
let flash = [];
let c;
function preload() {
  // preload() runs once
  // load images
  img = loadImage('IMG_1284.JPG');
  //Rome - Photo by Willian West on Unsplash
  rome = loadImage('ROME.jpg');
  //Japan - Photo by Manuel Cosentino on Unsplash
  japan = loadImage('Japan.jpg');
  //Elephants - Photo by Charl Durand on Unsplash
  africa = loadImage('elephant.jpg');
}


//month30 = ["4,6,9,11"];
//month28 = ["2"];

function setup() {
  createCanvas(800, 800);
  
  // setup() waits until preload() is done
  img.loadPixels();
  // get color of middle pixel
  c = img.get(img.width / 2, img.height / 2);
  for (i = 1; i <2; i++) {
    flash.push({
        x: random(100) + 150,
        y: random(180) + 120,
        color: random(200),
        s: random(5)
     });
  }
}

function draw() {
  background(190,52,80,45);
  fill (255);
  mon = month()
  d = day()
  y = year()
  textAlign(CENTER, CENTER);
  textSize(22);
  textStyle(BOLD);
  fill(10, 82, 153, 251);
  text("Virginia", 0, 300, width,90);
  text("Today is: " + mon + " / " + d + " / " + y, 0, 330, width,90);
  h = hour()
  //Using to convert time to UTC from Eastern Time
  //adjust UTC time to account for daylight savings
  newHourUTC = h+5
  japanDay = d+1
  if (newHourUTC >= 24) {
    newHourUTC = newHourUTC - 24;
    d = d+1;
    //if (d ==32){
    //  d = 1 
    //  mon = mon+1}
   // else if (mon == month30 && d == 31 || mon == month28 && d == 29);{
   //   d = 1
   //   mon = mon}
       
 }
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
  
  textAlign(CENTER, CENTER);
  text("The time is: " + h + ":" + newMinute + meridiem, 0, 365, width,90);
  fill(255, 204, 220, 190);
  text ("Work Hard! Dream Big!", 5,450,width);
    
  textAlign(LEFT, TOP);{
  textSize(18);
    fill(0);
  image(rome, 0, 0, 280, 280);
  text("Italy", 120, 20, width,90);
  text("The date is: " + mon + " / " + d + " / " + y, 30, 40, width,60);
    //calculating Italy Time   
  italyTime = newHourUTC + 1;
 
  if (italyTime >= 12) {
    italyTime = italyTime - 12;
    meridiem = "PM";
  }  else {
    meridiem = "AM";
  }
  // 0 AM and 0 PM should read as 12
  if (italyTime === 0) {
    italyTime = 12;    
  }  
  text("The current time is: " + italyTime + ":" + newMinute + meridiem, 26, 62, width,90);
  text ("Rome! Goal: 2020!", 62, 255, width,90);
  
  }
  
  textAlign(RIGHT, TOP);{
  textSize(18);
    fill(0);
    image(img, 520, 0, 280, 280);
  text("Ireland", -104, 20, width,90);
  text("The date is: " + mon + " / " + d + " / " + y, -21, 40, width,60);
  //calculating Ireland Time   
  //"Winter" time in Ireland is UTC = -0, "Summer" time = -1
  irelandTime = newHourUTC -0;
  if (irelandTime >= 12) {
    irelandTime = irelandTime - 12;
   meridiem = "PM";
  }  else {
    meridiem = "AM";
  }  
  // 0 AM and 0 PM should read as 12
  if (irelandTime === 0) {
    irelandTime = 12;    
  }
  text("The current time is: " + irelandTime + ":" + newMinute + meridiem, -12, 62, width,90);
  text ("Cliffs of Moher: 2018!", -37, 255, width,90);
    
  }
    
  textAlign(LEFT, BOTTOM);{
  textSize(18);
    fill(0);
  image(japan, 0, 515, 280, 280);
  text("Japan", 108, 494, height,55);
  text("The date is: " + mon + " / " + japanDay + " / " + y, 28, 510, width,60);
        
  //calculating Japan Time    
  japanTime = newHourUTC + 9;
  if (japanTime >= 12) {
    japanTime = japanTime - 12;
    meridiem = "AM";
  }  else {
    meridiem = "PM";
  }
  // 0 AM and 0 PM should read as 12
  if (japanTime === 0) {
    japanTime = 12;    
  }
  text("The current time is: " + japanTime + ":" + newMinute + meridiem, 20, 500, width,90);
  text ("Okinawa! Goal: 2022!", 52, 500, width,292);
    
  }
   textAlign(RIGHT, BOTTOM);{
  textSize(18);
    fill(0);
  image(africa, 520, 515, 280, 280);
  text("Africa", -110, 460, width,90);
    text("The date is: " + mon + " / " + d + " / " + y, -20, 510, width,60);
     
  //calculating Africa Time   
  africaTime = newHourUTC + 2;
  if (africaTime >= 12) {
    africaTime = africaTime - 12;
    meridiem = "PM";
  }  else {
    meridiem = "AM";
  }
  // 0 AM and 0 PM should read as 12
  if (africaTime === 0) {
    africaTime = 12;    
  }
  text("The current time is: " + africaTime + ":" + newMinute + meridiem, -14, 500, width,90);
  text ("Elephants! Goal: 2024!", -35, 500, width,290);
     
  }
  colorMode(HSL, 260, 100, 100, 1);{
  for (i = 0; i < flash.length; i++) {
    flash[i].color = flash[i].color % 80 + 0.3;
    flash[i].s = flash[i].s % .0 + 0.15;
    stroke(flash[i].color, 88, 168, 99);
    strokeWeight(flash[i].s);
    fill(flash[i].color, 88, 168, 99);
  }
    colorMode(RGB,320,318,400,57);
  }
  
}
