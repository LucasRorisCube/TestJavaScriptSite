let fireworks = [];

let gravity;

function setup() {
  createCanvas(windowWidth*0.9, windowHeight*0.9);
  gravity = createVector(0, 1);
  
}

function windowResized() {
  resizeCanvas(windowWidth*0.9, windowHeight*0.9);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 30);
  
  if(random(0, 1) < 0.2){
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