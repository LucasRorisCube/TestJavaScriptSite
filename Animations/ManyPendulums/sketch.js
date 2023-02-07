let r1 = 75;
let r2 = 100;
let m1 = 10;
let m2 = 10;
let g = 1;
let limitV = 1;

let pendulums = [];

function mousePressed() {}

function setup() {
  createCanvas(500, 400);

  colorMode(HSB);

  let numPendulums = 1000;

  for (let i = 0; i < numPendulums; i += 1) {
    let angle = map(i, 0, numPendulums, HALF_PI, HALF_PI - 0.01);
    //let angle = map(i, 0, numPendulums, HALF_PI, HALF_PI - 0.1);
    let colour = color(map(i, 0, numPendulums, 0, 360), 255, 255, 0.2);
    pendulums.push(new Pendulum(75, 100, 10, 10, angle, angle, colour));
  }
}

function draw() {
  background(0, 255, 0, 0.5);

  translate(width / 2, height / 4);

  for (let pend of pendulums) {
    pend.update();
    pend.show();
  }
}
