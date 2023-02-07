let fireworks = [];

let gravity;

function setup() {
  createCanvas(600, 600);
  
  gravity = createVector(0, 1);
  
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 10);
  
  if(random(0, 1) < 0.1){
    fireworks.push(new Firework());
  }
  
  for(let i = fireworks.length-1 ; i >= 0  ; i -= 1){
    
    fireworks[i].update();
    fireworks[i].show();
    
    if(fireworks[i].done()){
      fireworks.splice(i, 1);
    }
  }
  
}