class Firework {
  constructor(){
    this.color = random(0, 255);
    this.firework = new Particle(random(width), height, true, this.color);
    this.particles = [];
    this.exploded = false;
    
  }
  
  update(){
    if(!this.exploded){
      this.firework.applyForce(gravity);
      this.firework.update();

      if(this.firework.vel.y >= 0){
        this.exploded = true;
        this.explode();
      }
    } else {
      
      for(let i = this.particles.length-1 ; i >= 0  ; i -= 1){
        this.particles[i].applyForce(gravity);
        this.particles[i].update();
        
        if(this.particles[i].done()){
          this.particles.splice(i, 1);
        }
      }
    }
  }
  
  explode(){
    
    const numParticle = random(10, 30);
    for(let i = 0 ; i < numParticle ; i += 1){
      this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, false, this.color));
    }
  }
  
  done(){
    if(this.exploded && this.particles.length == 0){
      return true;
    } else {
      return false;
    }
  }
  
  show(){
    colorMode(HSB);
    stroke(this.color, 255, 255);
    strokeWeight(2);
    if(!this.exploded){
      this.firework.show();
    } else {
      for(let i = 0 ; i < this.particles.length ; i += 1){
        this.particles[i].show();
      }
    }
  }
}