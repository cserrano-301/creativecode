//Code from P5jS - https://p5js.org/reference/#/p5/preload

let img;
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

function setup() {
  createCanvas(500, 500);
  
  // setup() waits until preload() is done
  img.loadPixels();
  // get color of middle pixel
  c = img.get(img.width / 2, img.height / 2);
}

function draw() {
  background(0);
  fill (255);
  m = month()
  d = day()
  y = year()
  textAlign(CENTER, CENTER);
  textSize(14);
  fill(0, 102, 253, 151);
  text("Virginia", 0, 130, width,90);
  text("Today is: " + m + " / " + d + " / " + y, 0, 153, width,90);
  h = hour()
  //Using to convert time to UTC from Eastern Time
  newHourUTC = h+4
  if (newHourUTC > 24) {
    newHourUTC = newHourUTC - 24;
    d = d+1;  
    }
  m = minute()
  newMinute = minute()
  //Had trouble figuring out how to get AM and PM into the time   
  //Found at - https://googlecreativelab.github.io/coder-  projects/projects/digital_clock/
  // Let's set the AM and PM meridiem and 
  // 12-hour format
  var meridiem = "AM";  // Default is AM
  if (h > 12) {
    h = h - 12;
    meridiem = "PM";
  }   
  // 0 AM and 0 PM should read as 12
  if (h === 0) {
    h = 12;    
  }
  if ((minute().toString().length) < 2) {
    newMinute = 0 + minute().toString()}
  
  textAlign(CENTER, CENTER);
  text("The time is: " + h + ":" + newMinute + meridiem, 0, 198, width,90);
  fill(255, 204, 220, 190);
  text ("Work Hard! Dream Big!", 0,220,width);
    
  textAlign(LEFT, TOP);{
  textSize(12);
    fill(140, 22, 198, 191);
  text("Italy", 40, 20, width,90);
  text("The date is: " + month() + " / " + d + " / " + y, 5, 40, width,60);
  //calculating Italy Time   
  italyTime = newHourUTC + 1;
  if (italyTime > 12) {
    italyTime = italyTime - 12;
  }  
  // 0 AM and 0 PM should read as 12
  if (italyTime === 0) {
    italyTime = 12;    
  }  
  text("The current time is: " + italyTime + ":" + newMinute + meridiem, 5, 60, width,90);
  text ("Rome! Goal: 2020!", 5, 80, width,90);
  image(rome, 33, 110, 70, 70);
  }
  
  textAlign(RIGHT, TOP);{
  textSize(12);
    fill(140, 202, 108, 151);
  text("Ireland", -60, 20, width,90);
  text("The date is: " + month() + " / " + d + " / " + y, -13, 40, width,60);
  //calculating Ireland Time   
  //"Winter" time in Ireland is UTC = -0, "Summer" time = -1
  irelandTime = newHourUTC -0;
  if (irelandTime > 12) {
    irelandTime = irelandTime - 12;
  }  
  // 0 AM and 0 PM should read as 12
  //if (irelandTime === 0) {
    //irelandTime = 12;    
  //}
  text("The current time is: " + irelandTime + ":" + newMinute + meridiem, -5, 60, width,90);
  text ("Cliffs of Moher - 2018!", -33, 80, width,90);
    image(img, 393, 110, 70, 70);
  }
    
  textAlign(LEFT, BOTTOM);{
  textSize(12);
    fill(240, 22, 198, 191);
  text("Japan", 40, 258, height,55);;
  text("The date is: " + month() + " / " + d + " / " + y, 5, 272, width,60);
        
  //calculating Japan Time    
  japanTime = newHourUTC + 9;
  if (japanTime > 12) {
    japanTime = japanTime - 12;
    meridiem = "PM";}
  // 0 AM and 0 PM should read as 12
  if (japanTime === 0) {
    japanTime = 12;    
  }
  text("The current time is: " + japanTime + ":" + newMinute + meridiem, 5, 262, width,90);
  text ("Okinawa! Goal: 2022!", 5, 80, width,292);
    image(japan, 33, 390, 70, 70);
  }
  textAlign(RIGHT, BOTTOM);{
  textSize(12);
    fill(255, 80, 80, 191);
  text("Africa", -70, 221, width,90);
    text("The date is: " + month() + " / " + d + " / " + y, -13, 270, width,60);
     
  //calculating Africa Time   
  africaTime = newHourUTC + 2;
  if (africaTime > 12) {
    africaTime = africaTime - 12;
  }
  // 0 AM and 0 PM should read as 12
  if (africaTime === 0) {
    africaTime = 12;    
  }
  text("The current time is: " + africaTime + ":" + newMinute + meridiem, -5, 260, width,90);
  text ("Elephants! Goal: 2024!", -28, 80, width,290);
     image(africa, 393, 390, 70, 70);
  }
}
