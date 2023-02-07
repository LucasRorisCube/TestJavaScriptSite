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

  setAngle(angle) {
    this.dir = p5.Vector.fromAngle(angle);
  }

  collide(wall) {
    let hit = collideLineLine(
      wall.a.x,
      wall.a.y,
      wall.b.x,
      wall.b.y,
      this.pos.x,
      this.pos.y,
      this.dir.x * 1000,
      this.dir.y * 1000,
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

let sceneW = 600;
let sceneH = 300;

function setup() {
  createCanvas(600, 600);

  indiv = new Individual(sceneW / 2, sceneH / 2);

  walls = [];

  for (let i = 0; i < 5; i += 1) {
    walls.push(
      new Wall(random(sceneW), random(sceneH), random(sceneW), random(sceneH))
    );
  }

  walls.push(new Wall(1, sceneH, 1, 1));
  walls.push(new Wall(1, 1, sceneW, 1));
  walls.push(new Wall(1, sceneH, sceneW, sceneH));
  walls.push(new Wall(sceneW, 1, sceneW, sceneH));
  
}

let xoff = 50;
let yoff = 100;

function draw() {
  background(0);
  //indiv.setPos(noise(xoff)*sceneW, noise(yoff)*sceneH);
  indiv.setPos(mouseX, mouseY);
  xoff += 0.01;
  yoff += 0.01;
  indiv.show();
  indiv.collide(walls);
  
  if(keyIsDown(LEFT_ARROW)){
    indiv.rotate(-0.03);
  }
  if(keyIsDown(RIGHT_ARROW)){
    indiv.rotate(0.03);
  }

  for (let i = 0; i < walls.length; i += 1) {
    walls[i].show();
  }
}
