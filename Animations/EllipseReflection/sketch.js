let el;
let balls = [];

function setup() {
  createCanvas(800, 600);
  el = new Ellipse(createVector(0, 0), 500, 400);

  for(let i = 0 ; i < 1 ; i++){
    balls.push(new Ball(createVector(-200, 0), radians(random(25, 45)), color(255, 0, 0)));
    balls.push(new Ball(createVector(0, 0), radians(random(25, 45)), color(0, 255, 0)));
}

  background(0);
}

function draw() {
  background(0, 0, 0);
  translate(width/2, height/2);
  
  

  for(let ball of balls){
    if(!el.isInside(ball)){
      el.rebound(ball);
    }
    
    
    ball.show();
    ball.update();
    
  }

  el.show();

  
  
}