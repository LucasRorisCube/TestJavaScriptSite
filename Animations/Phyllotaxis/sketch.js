let n = 0;
let c = 40;

function setup() {
  createCanvas(600, 600);
  background(0);
  colorMode(HSB);
}

let speedDraw = 10;
let theta = 137.5;
let ro = 0.0;

function draw() {
  translate(width/2, height/2);
  for(let i = 0 ; i < speedDraw ; i += 1){
    

    let phi = n * theta;
    let r = c * sqrt(radians(n));

    const x = r * cos(phi);
    const y = r * sin(phi);

    fill(5*r % 256, 100, 100);
    noStroke();
    circle(x, y, 4);

    n++;

  }
}