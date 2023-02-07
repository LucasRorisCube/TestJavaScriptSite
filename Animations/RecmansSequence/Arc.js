class Arc {
  constructor(x, y, d, start, end){
    this.x = x;
    this.y = y;
    this.d = 2*d;
    this.start = start;
    this.end = end;
  }
  
  show(){
    noFill();
    stroke(255);
    strokeWeight(0.5);
    arc(this.x, this.y, this.d, this.d, this.start, this.end);
  }
}