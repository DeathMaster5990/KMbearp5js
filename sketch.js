function setup() {
  createCanvas(600,600);
}

function draw() {
  
  background("red");
  noStroke();
  
  //ears
  fill("orange")
  circle(150,100,150);
  circle(450,100,150);
  //innerears
  fill("yellow");
  circle(150,100,100);
  circle(450,100,100);
  //face
  fill("brown");
  circle(300,300,500);
  fill("beige")
  circle(300,400,250);

  //eyes
  fill("green");
  
  circle(300,310,50);
  fill("blue")
  circle(200,200,40)
  circle(400,200,40);
  
  fill("purple")
  circle(300,425,150)

}

