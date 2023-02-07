class BlackHole {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.m = m;
    this.rs = (2 * G * this.m) / (c * c);
  }

  show() {
    fill(0);
    noStroke();
    circle(this.pos.x, this.pos.y, 2 * this.rs);

    noFill();
    strokeWeight(40);
    stroke(0, 0, 0, 50);
    circle(this.pos.x, this.pos.y, 2.6 * 2 * this.rs + 20);

    noFill();
    strokeWeight(20);
    stroke(255, 140, 0, 150);
    circle(this.pos.x, this.pos.y, 1.5 * 2 * this.rs + 10);
  }
  
  applyForce(particle){
    const force = p5.Vector.sub(this.pos, particle.pos);
    const r = force.mag();
    const fg = G * this.m / (r * r);
    force.setMag(fg);
    particle.vel.add(force);
    particle.vel.setMag(c);
    
    if(r < this.rs){
      particle.stop();
    }
  }
}
