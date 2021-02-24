var hr, sc,mn;
var hrAngle, scAngle, mnAngle;
function setup() {

  createCanvas(800,400);


}

function draw() {
  background("black");
  textSize(25);  
  fill("deeppink");
  text("YOUR OWN VIRTUAL CLOCK!",380,340); 
  fill("springgreen");
  text("Green=Minuets",380,300);
  fill("crimson");
  text("Red=Seconds",380,260);
  fill("deepskyblue");
  text("Blue= Hours",380,220);
   hr= hour();
  mn= minute();
  sc= second();
console.log(hr%12);
  translate(200,200);
  rotate(-90);
  scAngle= map(sc,0,60,0,360);
  mnAngle= map(mn, 0,60,0,360);
  hrAngle= map(hr%12,0,12,0,360);
//drawing seconds hand
push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0)
pop();
//drawing minute hand
push();
rotate(mnAngle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,70,0)
pop();
//drawing hours hand
push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0)
pop();
//drawing arc's
strokeWeight(10);
noFill();
//seconds
stroke(255,0,0);
arc(0,0,300,300,0,scAngle);
//minuets
stroke(0,255,0)
arc(0,0,280,280,0,mnAngle);
//hour
stroke(0,0,255)
arc(0,0,260,260,0,hrAngle);

}