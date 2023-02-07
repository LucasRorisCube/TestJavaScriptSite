class Individual {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.heading = 0;
    this.rays = [];
    for (let angle = 0; angle < 45; angle += 1) {
      this.rays.push(new Ray(this.pos, radians(angle)));
    }
  }

  show() {
    stroke(255);
    circle(this.pos.x, this.pos.y, 10);
  }

  setPos(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }
  
  rotate(angle){
    this.heading += angle;
    for(let i = 0 ; i < this.rays.length ; i += 1){
      this.rays[i].setAngle(radians(i) + this.heading);
    }
  }

  collide(walls) {
    for (let i = 0; i < this.rays.length; i += 1) {
      let minimumDist = Infinity;
      let nearestPt;
      for (let wall of walls) {
        let hit = this.rays[i].collide(wall);
        //print(ray.pos);
        if (hit && hit.x != false && hit.y != false) {
          const d = p5.Vector.dist(this.pos, hit);
          if (d < minimumDist) {
            minimumDist = d;
            nearestPt = hit;
          }
        }
      }
      if (nearestPt) {
        stroke(255, 255, 255, 70);
        line(this.pos.x, this.pos.y, nearestPt.x, nearestPt.y);

        let h = map(minimumDist, 0, 670, height/2, 0);
        rectMode(CENTER);
        noStroke();
        fill(255, 255, 255, map(minimumDist, 0, 670, 255, 0));
        rect(
          (i * width) / this.rays.length,
          (3 * height) / 4,
          width / this.rays.length,
          h
        );
        rectMode(CORNER);
        
      }
    }
  }
}
