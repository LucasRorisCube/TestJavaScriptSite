function setup() {
  createCanvas(600, 600);

  background(0);

  translate(width / 2, height / 2);
  rectMode(CENTER);

  // Draw
  strokeWeight(4);
  stroke(0, 0, 255);
  noFill();
  rect(0, 0, width, height);

  stroke(0, 255, 0);
  noFill();
  circle(0, 0, width);
  
}

let speedPoints = 100;

let insideCircle = 0;
let totalPoints = 0;

function draw() {
  translate(0, 0);
  for (let i = 0; i < speedPoints; i += 1) {
    let x = random(0, width);
    let y = random(0, height);

    
    
    const dx = x - width/2;
    const dy = y - height/2;
    const d = sqrt(dx*dx+dy*dy);
    
    if(d >= width/2){
      stroke(255, 140, 0);
      strokeWeight(2);
      point(x, y);
    } else {
      stroke(255);
      strokeWeight(2);
      point(x, y);
      insideCircle += 1;
    }
    totalPoints += 1;
    
    
  }
  if(frameCount % 10 == 0) print(4*insideCircle/totalPoints);

}
