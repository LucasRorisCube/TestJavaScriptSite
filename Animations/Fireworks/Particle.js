class Particle {
  constructor(x, y, isFirework, colour){
    
    this.pos = createVector(x, y);
    this.lifespan = 255;
    this.colour = colour;
    this.isFirework = isFirework;
    if(isFirework){
      
      this.vel = createVector(0, random(-20, -35));
      
    } else {
      
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(5, 20));
    }
    
    this.acc = createVector(0, 0);
  }
  
  applyForce(force){
    this.acc.add(force);
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    
    if(!this.isFirework){
      this.lifespan -= random(10, 25);
    }
  }
  
  done(){
    if(!this.isFirework && this.lifespan <= 0){
      return true;
    } else {
      return false;
    }
  }
  
  show(){
    colorMode(HSB);
    if(this.isFirework){
      stroke(this.colour, 255, 255);
      strokeWeight(4);
      point(this.pos.x, this.pos.y);
    } else {
      stroke(this.colour, 255, 255, this.lifespan);
      strokeWeight(2);
      point(this.pos.x, this.pos.y);
    }
    
  }
}