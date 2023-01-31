let cubies;

const N = 3;

let turnQueue = [];

let speedRotation;
let currentMove;

let sequence = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  
  allMoves = new Array (
  new Move(0, 1, 0, 1), 
  new Move(0, 1, 0, -1), 
  new Move(0, -1, 0, 1), 
  new Move(0, -1, 0, -1), 
  new Move(1, 0, 0, 1), 
  new Move(1, 0, 0, -1), 
  new Move(-1, 0, 0, 1), 
  new Move(-1, 0, 0, -1), 
  new Move(0, 0, 1, 1), 
  new Move(0, 0, 1, -1), 
  new Move(0, 0, -1, 1), 
  new Move(0, 0, -1, -1) 
); 

  cubies = new Array(N * N * N);
  
  let index = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubies[index] = new Cubie(x, y, z, index);
        index++;
      }
    }
  }
  
  currentMove = new Move(0, 0, 0, 1);
  
  for(let i = 0 ; i < 10 ; i++){
    const r = int(random(allMoves.length));
    sequence.push(allMoves[r].copy());
  }
  
  for(let i = sequence.length-1 ; i >= 0 ; i--){
    
    let auxMove = sequence[i].copy();
    auxMove.reverse();
    sequence.push(auxMove);
  }
  
  speedRotation = HALF_PI*1/16;
  //speedRotation = HALF_PI;
  
}

function turnX(index, dir){

  for(let c of cubies){
    if(c.x == index){
      let newY;
      let newZ;
      const angle = dir*HALF_PI;
      
      newY = round(c.y*cos(angle)-c.z*sin(angle));
      newZ = round(c.y*sin(angle)+c.z*cos(angle));
      
      c.y = newY;
      c.z = newZ;
      c.turnFacesX(dir);
      
    }
  }
}

function turnY(index, dir){
  
  for(let c of cubies){
    if(c.y == index){
      let newX;
      let newZ;
      const angle = dir*HALF_PI;
      
      newX = round(c.x*cos(angle)-c.z*sin(angle));
      newZ = round(c.x*sin(angle)+c.z*cos(angle));
      
      c.x = newX;
      c.z = newZ;
      c.turnFacesY(dir);
      
    }
  }
}

function turnZ(index, dir){

  for(let c of cubies){
    if(c.z == index){
      let newX;
      let newY;
      const angle = dir*HALF_PI;
      
      newX = round(c.x*cos(angle)-c.y*sin(angle));
      newY = round(c.x*sin(angle)+c.y*cos(angle));
      
      c.x = newX;
      c.y = newY;
      c.turnFacesZ(dir);
      
    }
  }
}

let thetaAux = 0.0;

let index = -1;

function draw() {
  background(200);
  
  orbitControl(10, 10, 10);
  currentMove.update();
  if(index >= 0){
    if(currentMove.finished){
      index++;
      if(index >= sequence.length){
        index = -1;
      } else {
        currentMove = sequence[index];
        currentMove.start();
      }
    }
  }
  
  scale(50);
  
  for(let i = 0 ; i < cubies.length ; i++){
    
    push();
    
    if(abs(cubies[i].z) > 0 && cubies[i].z == currentMove.z){
      rotateZ(currentMove.angle);
    } else if(abs(cubies[i].x) > 0 && cubies[i].x == currentMove.x){
      rotateX(currentMove.angle);
    } else if(abs(cubies[i].y) > 0 && cubies[i].y == currentMove.y){
      rotateY(-currentMove.angle);
    }
    
    
    cubies[i].show();
    pop();
  }

}
