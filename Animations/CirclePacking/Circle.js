class Circle {
  constructor(x, y){
    this.x = x;
    this.y = y;
    
    this.r = 1;
    
    this.stop = false;
  }
  
  show(){
    noFill();
    stroke(255);
    strokeWeight(1);
    circle(this.x, this.y, 2*this.r);
  }
  
  grow(){
    if(!this.stop){
      this.r += 0.01;
    }
  }
  
  update(){
    
    if(!this.stop){
    
      for(let c of circles){
        if(c != this){
          const dx = this.x - c.x;
          const dy = this.y - c.y;
          const d = sqrt(dx*dx + dy*dy);

          if(d-2 < (c.r + this.r)){
            this.stop = true;
            break;
          }
        }
      }
      
      if(this.x-this.r < 2 || this.x+this.r > width-2 || this.y-this.r < 2 || this.y+this.r > height-2){
        this.stop = true;
      }
      
      
    }
    
  }
  
}