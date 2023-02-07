class Boid {
  constructor(){
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(0.5, 1.5));
    //this.acc = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.maxForce = 0.1;
    this.maxSpeed = 3;
    
    this.updateVertices();
  }
  
  updateVertices(){
    let auxPos = this.pos.copy();
    let auxVel = this.vel.copy();
    auxVel.normalize();
    auxVel.mult(30); // Length of head
    
    auxPos.add(auxVel);
    this.v1 = createVector(auxPos.x, auxPos.y);
    
    auxPos.sub(auxVel);
    
    auxVel.normalize();
    auxVel.mult(8);
    auxVel.rotate(PI/2);
    
    auxPos.add(auxVel);
    this.v2 = createVector(auxPos.x, auxPos.y);
    
    auxPos.sub(auxVel);
    auxVel.rotate(PI);
    
    auxPos.add(auxVel);
    this.v3 = createVector(auxPos.x, auxPos.y);
  }
  
  show(){
    
    stroke(255);
    strokeWeight(1);
    fill(255, 100);
    beginShape();
    vertex(this.v1.x, this.v1.y);
    vertex(this.v2.x, this.v2.y);
    vertex(this.v3.x, this.v3.y);
    endShape(CLOSE);
    
  }
  
  edges(){
    if(this.pos.x < 0){
      this.pos.x = width;
    } else if(this.pos.x > width){
      this.pos.x = 0;
    }
    
    if(this.pos.y < 0){
      this.pos.y = height;
    } else if(this.pos.y > height){
      this.pos.y = 0;
    }
  }
  
  flock(){
    let alignment = this.align();
    let cohesion = this.cohesion();
    let separation = this.separation();
    
    alignment.mult(alignSlider.value());
    cohesion.mult(cohesionSlider.value());
    separation.mult(separationSlider.value());
    
    this.acc.add(alignment);
    this.acc.add(cohesion);
    this.acc.add(separation);
  }
  
  separation(){
    
    const searchRadius = 50;
    let total = 0;
    let avg = createVector();
    for(let b of boids){
      const d = p5.Vector.dist(this.pos, b.pos);
      if(b != this && d < searchRadius){
        let diff = p5.Vector.sub(this.pos, b.pos);
        diff.div(d);
        avg.add(diff);
        total++;
      }
    }
    
    if(total > 0){
      avg.div(total);
      avg.setMag(this.maxSpeed);
      avg.sub(this.vel);
      avg.limit(this.maxForce);
    }
    return avg;
  }
  
  cohesion(){
    
    const searchRadius = 50;
    let total = 0;
    let avg = createVector();
    for(let b of boids){
      const d = p5.Vector.dist(this.pos, b.pos);
      if(b != this && d < searchRadius){
        
        avg.add(b.pos);
        total++;
      }
    }
    
    if(total > 0){
      avg.div(total);
      avg.sub(this.pos);
      avg.setMag(this.maxSpeed);
      avg.sub(this.vel);
      avg.limit(this.maxForce);
    }
    return avg;
  }
  
  align(){
    
    const searchRadius = 50;
    let total = 0;
    let avg = createVector();
    for(let b of boids){
      const d = p5.Vector.dist(this.pos, b.pos);
      if(b != this && d < searchRadius){
        
        avg.add(b.vel);
        total++;
      }
    }
    
    if(total > 0){
      avg.div(total);
      avg.setMag(this.maxSpeed);
      avg.sub(this.vel);
      avg.limit(this.maxForce);
    }
    return avg;
  }
  
  update(){
    this.vel.add(this.acc);
    this.vel.setMag(this.maxSpeed);
    
    this.pos.add(this.vel);
    this.updateVertices();
    this.acc.mult(0);
    
    
  }
}