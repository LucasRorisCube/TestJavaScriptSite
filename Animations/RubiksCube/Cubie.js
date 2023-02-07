class Cubie {
  constructor(x, y, z, index){
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.index = index;
    
    this.faces = new Array(6);
    this.faces[0] = new Face(createVector(0, 0, -1), color(0, 0, 255));
    this.faces[1] = new Face(createVector(0, 0, 1), color(0, 255, 0));
    this.faces[2] = new Face(createVector(0, 1, 0), color(255, 255, 255));
    this.faces[3] = new Face(createVector(0, -1, 0), color(255, 255, 0));
    this.faces[4] = new Face(createVector(1, 0, 0), color(255, 150, 0));
    this.faces[5] = new Face(createVector(-1, 0, 0), color(255, 0, 0));

  }
  
  turnFacesZ(dir){
    for(let f of this.faces){
      f.turnZ(dir*HALF_PI);
    }
  }
  
  turnFacesY(dir){
    for(let f of this.faces){
      f.turnY(dir*HALF_PI);
    }
  }
  
  turnFacesX(dir){
    for(let f of this.faces){
      f.turnX(dir*HALF_PI);
    }
  }
  
  show(){
    
    push(); 
    
    translate(this.x, this.y, this.z);
    
    box(0.9999);
    
    for(let f of this.faces){
      f.show();
    }
    
    pop();
  }
}