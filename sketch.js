var myRed=1;
var myGreen=2;
var myBlue=3;

function circle(x,y,diameter) {
  arc(x,y,diameter,diameter,0,TWO_PI);
  
}

function setup() {
  createCanvas(1000,1000);
  background(150,144,212);
}

function draw() {
  myRed=myRed+.8;
  if (myRed==255){
    myRed= myRed-10;
  }
  myGreen=myGreen+.5;
  if (myGreen==255){
    myGreen= myGreen-14;
  }
  myBlue=myBlue+.8;
  if (myBlue==255){
    myBlue= myBlue-16;
  }
  noStroke();
  fill(myRed,myGreen,myBlue);
  circle(mouseX,mouseY,15);
  
}

function mousePressed(){
 background(147,189,250);
  
}