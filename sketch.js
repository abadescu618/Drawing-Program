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
  noStroke();
  fill(myRed,myGreen,myBlue);
  myRed=random(255);
  myGreen=250;
  myBlue=250;
  circle(mouseX,mouseY,20);
  
  if (mouseIsPressed){
    noStroke();
    fill(255,255,255);
    circle(mouseX,mouseY,20);
  }
  
 for (var ii=0; ii<=1000; ii+=45){
   fill(0);
   circle(ii,200,25); 
  }

  
}
