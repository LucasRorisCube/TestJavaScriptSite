class Individual {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.rays = [];
    for (let angle = 0; angle < 360; angle += 0.5) {
      this.rays.push(new Ray(this.pos, angle));
    }
  }

  show() {
    stroke(255);
    circle(this.pos.x, this.pos.y, 10);
  }
  
  setPos(x, y){
    this.pos.x = x;
    this.pos.y = y;
  }

  collide(walls) {
    for (let ray of this.rays) {
      let minimumDist = Infinity;
      let nearestPt;
      for (let wall of walls) {
        let hit = ray.collide(wall);
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
        //strokeWeight(1);
        line(this.pos.x, this.pos.y, nearestPt.x, nearestPt.y);
      }
    }
  }
}
