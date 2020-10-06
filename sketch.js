var hr,min,sec
var secangle,minangle,hourangle;
function setup() {
  createCanvas(800,400);
  
  hr=hour();
  min=minute();
  sec=second();
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  
  translate(200,200)
  rotate(-90);
 hr=hour();
  min=minute();
  sec=second();
  secangle=map(sec,0,60,0,360);
  minangle=map(min,0,60,0,360)
  hourangle=map(hr%12,0,12,0,360);
  push()
  rotate(secangle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push()
  rotate(minangle)
  stroke("green")
  strokeWeight(7)
  line(0,0,80,0)
  pop()
  push()
  rotate(hourangle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  strokeWeight(10)
  noFill()
  stroke(255,0,0)
  arc(0,0,300,300,0,secangle)
  noFill()
  stroke("green")
  arc(0,0,270,270,0,minangle)
  noFill()
  stroke("blue")
  arc(0,0,240,240,0,hourangle)
  drawSprites();
}