class Ray {
  constructor(pos, angle) {
    this.pos = pos;
    this.dir = p5.Vector.fromAngle(angle);
  }

  show() {
    stroke(255);
    push();
    translate(this.pos.x, this.pos.y);
    line(0, 0, this.dir.x * 10, this.dir.y * 10);
    pop();
  }

  lookAt(x, y) {
    this.dir.x = x - this.pos.x;
    this.dir.y = y - this.pos.y;
    this.dir.normalize();
  }

  collide(wall) {
    let hit = collideLineLine(
      wall.a.x,
      wall.a.y,
      wall.b.x,
      wall.b.y,
      this.pos.x,
      this.pos.y,
      this.dir.x * 3000,
      this.dir.y * 3000,
      true
    );
    //print(hit);
    if (hit.x != false && hit.y != false) {
      return createVector(hit.x, hit.y);
    }
    return;
  }
}

class Wall {
  constructor(x1, y1, x2, y2) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
  }

  show() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}

let wall;
let ray;
let indiv;
let walls;

function keyPressed(){
  if(key == 'r'){
    createWalls();
  }
}

function createWalls(){
  walls = [];

  for (let i = 0; i < 5; i += 1) {
    walls.push(
      new Wall(random(width), 
               random(height), 
               random(width), 
               random(height))
    );
  }
  
  walls.push(new Wall(1, height, 1, 1));
  walls.push(new Wall(1, 1, width, 1));
  walls.push(new Wall(1, height, width, height));
  walls.push(new Wall(width, 1, width, height));
}

function setup() {
  createCanvas(floor(windowWidth*0.9), floor(windowHeight*0.9));

  indiv = new Individual(width/2, height/2);

  createWalls();
  
}

function windowResized() {
  resizeCanvas(windowWidth*0.9, windowHeight*0.9);
}

let xoff = 50;
let yoff = 100;

function draw() {
  background(0);
  //indiv.setPos(noise(xoff)*width, noise(yoff)*height);
  indiv.setPos(mouseX, mouseY);
  xoff += 0.01;
  yoff += 0.01;
  indiv.show();
  indiv.collide(walls);

  for (let i = 0; i < walls.length; i += 1) {
    walls[i].show();
  }
}
