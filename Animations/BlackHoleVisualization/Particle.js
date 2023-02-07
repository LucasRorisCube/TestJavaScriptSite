class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(-c, 0);
    this.past = [];
    this.stopped = false;
  }

  show() {
    if (!this.stopped) {
      fill(255, 0, 0);
      noStroke();
      circle(this.pos.x, this.pos.y, 4);
    }

    stroke(255, 100, 100);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let p of this.past) {
      vertex(p.x, p.y);
    }
    endShape();
  }

  stop() {
    this.stopped = true;
  }

  update() {
    if (!this.stopped) {
      const deltaV = this.vel.copy();
      deltaV.mult(dt);
      this.pos.add(deltaV);
    }

    this.past.push(this.pos.copy());
    if (this.past.length > 500) {
      this.past.splice(0, 1);
    }
  }
}
