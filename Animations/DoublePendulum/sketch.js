let r1 = 75;
let r2 = 100;
let m1 = 10;
let m2 = 10;
let g = 1;
let limitV = 50;

let theta1;
let theta2;

let a1_v = 0.0;
let a2_v = 0.0;

let a1_a = 0.0;
let a2_a = 0.0;

function mousePressed(){
  theta1 = radians(random(-180, 180));
  theta2 = radians(random(-180, 180));
  a1_v = 0.0;
  a2_v = 0.0;

  a1_a = 0.0;
  a2_a = 0.0;
  p = [];
}

function setup() {
  createCanvas(500, 400);
  
  theta1 = radians(random(0, 180));
  theta2 = radians(random(0, 180));
  
}

let p = [];

function draw() {
  background(255);

  translate(width / 2, height / 4);

  let x1 = r1 * sin(theta1);
  let y1 = r1 * cos(theta1);

  let x2 = x1 + r2 * sin(theta2);
  let y2 = y1 + r2 * cos(theta2);
  
  a1_a = (-g*(2*m1+m2)*sin(theta1)-m2*g*sin(theta1-2*theta2)-2*sin(theta1-theta2)*m2*(a2_v*a2_v*r2+a1_v*a1_v*r1*cos(theta1-theta2))) / (r1*(2*m1+m2-m2*cos(2*theta1-2*theta2)));
  
  a2_a = (2*sin(theta1-theta2)*(a1_v*a1_v*r1*(m1+m2)+g*(m1+m2)*cos(theta1)+a2_v*a2_v*r2*m2*cos(theta1-theta2))) / (r2*(2*m1+m2-m2*cos(2*theta1-2*theta2)));
  
  
  a1_v += a1_a;
  a2_v += a2_a;
  
  if(a1_v > limitV){
    print("hi");
    a1_v = limitV;
  }
  
  if(a2_v > limitV){
    a2_v = limitV;
  }
  
  theta1 += a1_v;
  theta2 += a2_v;

  // Draw
  stroke(0);
  strokeWeight(2);
  line(0, 0, x1, y1);
  line(x1, y1, x2, y2);

  noStroke();
  fill(126);
  circle(x1, y1, m1*2);
  circle(x2, y2, m2*2);

  p.push(createVector(x2, y2));

  stroke(0);
  strokeWeight(1);
  noFill();
  beginShape();
  for (let poin of p) {
    vertex(poin.x, poin.y);
  }
  endShape();
}
