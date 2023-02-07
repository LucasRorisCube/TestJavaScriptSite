let r = 150;
let n = 100;

let factor = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  
  stroke(255);
  noFill();
  circle(0, 0, 2*r);
  
  for(let i = 0 ; i <= n ; i += 1){
    
    let mul = i * factor;
    mul = mul % n;
    
    const phi = mul/n * TWO_PI;
    const theta = i/n * TWO_PI;
    
    let xToGo = -r * cos(phi);
    let yToGo = -r * sin(phi);
    
    let x = -r * cos(theta);
    let y = -r * sin(theta);
    
    line(xToGo, yToGo, x, y);
    circle(x, y, 4);
  }
  //noLoop();
  //n += 1;
  factor += 0.02;
}