let boids = [];

let alignSlider, cohesionSlider, separationSlider;

function setup() {
  createCanvas(600, 600);
  
  alignSlider = createSlider(0, 5, 1, 0.1);
  cohesionSlider = createSlider(0, 5, 1, 0.1);
  separationSlider = createSlider(0, 5, 1, 0.1);
  
  for(let i = 0 ; i < 100 ; i++){
    boids.push(new Boid());
  }
  
}

function draw() {
  background(0);
  for(let b of boids){
    
    b.flock();
    
    b.edges();
    b.update();
    b.show();
  }
}