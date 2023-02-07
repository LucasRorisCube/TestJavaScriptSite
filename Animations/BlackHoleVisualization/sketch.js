let c = 30;
let G = 2.3;
let dt = 0.15;

let bh;
let particles = [];

function setup() {
  createCanvas(600, 600);
  bh = new BlackHole(width / 2, height / 2, 10000);
  
  const numParticle = 30;
  for (let i = 0; i < numParticle; i += 1) {
    particles.push(new Particle(width - 50, map(i, 0, numParticle, height / 2, 0), 180));
  }
  
}

function draw() {
  background(255);
  for (let i = 0; i < particles.length; i += 1) {
    bh.applyForce(particles[i]);
    particles[i].update();
    particles[i].show();
  }
  bh.show();
}
