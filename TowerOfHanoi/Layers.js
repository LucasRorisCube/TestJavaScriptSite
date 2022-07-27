let yspeed = 3;
let xspeed = 3;

class Layer {
  
  constructor(r, g, b, w, h) {

    this.w = w;
    this.h = h;
    this.colour = color(r,g,b);
    this.stage = 0;
  }
  
  show(x, y){
    rectMode(CENTER);
    fill(this.colour);
    rect(x, y, this.w,this.h,this.h*0.5);
  }
  
}