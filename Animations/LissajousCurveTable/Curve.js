class Curve {
  constructor(){
    this.points = [];
  }
  
  show(){
    
    stroke(255);
    strokeWeight(1);
    noFill();
    beginShape();

    for(let p of this.points){
      vertex(p.x, p.y);
    }
    endShape();
  }
  
  addPoint(x, y){
    this.points.push(createVector(x, y));
  }
}