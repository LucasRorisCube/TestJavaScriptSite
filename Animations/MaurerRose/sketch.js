let n = 2;
let d = 29;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
}

function draw() {
  background(0);
  
  translate(width/2, height/2);
  
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for(let i = 0 ; i < 360 ; i += 1){
    let k = i * d;
    let r = 150 * sin(n * k);
    
    let x = r * sin(k);
    let y = r * cos(k);
    
    vertex(x, y);
  }
  endShape(CLOSE);
  
  /*
  beginShape();
  stroke(255, 140, 0);
  strokeWeight(1);
  noFill();
  beginShape();
  for(let i = 0 ; i < 360 ; i += 1){
    let k = i;
    let r = 150 * sin(n * k);
    
    let x = r * sin(k);
    let y = r * cos(k);
    
    vertex(x, y);
  }
  endShape(CLOSE);*/
  
  
  n += 0.0001;
  d += 0.0001
  
  stroke(255);
  fill(255);
  text(round(n,10), -width/2, -height/2 + 10);
  text(round(d,10), -width/2, -height/2 + 20);
}