let numDivisions = 10;
let step;

function setup() {
  createCanvas(600, 600);
  
  step = TWO_PI / numDivisions;;
  background(0);

}

function draw() {
  
  translate(width/2, height/2);
  colorMode(HSB);
  
  if(keyIsPressed && keyCode == 82){
    background(0);
  }
  
  if(mouseIsPressed){
    
    const mx = mouseX - width/2;
    const my = mouseY - width/2;
    const pmx = pmouseX - width/2;
    const pmy = pmouseY - width/2;
    for(let i = 0 ; i < numDivisions ; i++){
      rotate(step);
      stroke(i*360/numDivisions, 255, 255);
      const d = dist(mx, my, pmx, pmy);
      const sw = map(d, 0, 10, 10, 1);
      constrain(sw, 10, 1);
      strokeWeight(sw);

      line(mx, my, pmx, pmy);
    }
  }
}