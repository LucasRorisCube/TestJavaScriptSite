let sliderN;
let sliderT;

function setup() {
  createCanvas(700, 500);
  
  sliderN = createSlider(1, 50, 10, 1);
  sliderT = createSlider(0, 0.1, 0.02, 0.01);
  
}

let t = 0.0;

let graph = [];

function draw() {
  background(0);
  
  translate(width / 4, height / 2);
  
  let x = 0;
  let y = 0;
  
  let prevX = 0;
  let prevY = 0;
  
  for(let i = 0 ; i < sliderN.value() ; i += 1){
    let n = i * 2 + 1;
    
    prevX = x;
    prevY = y;
    
    r = 100 * (4 / (n * PI))
    
    x += r * cos(n * t);
    y += r * sin(n * t);
    
    fill(255);
    stroke(255);
    //circle(x, y, 10);
    line(x, y, prevX, prevY);
    
    stroke(255, 100);
    noFill();
    circle(prevX, prevY, 2*r);
    
  }
  
  graph.unshift(y);
  
  stroke(255, 140, 0, 200);
  line(x, y, 250, graph[0]);
  
  
  translate(250, 0);
  
  
  
  beginShape();
  stroke(255);
  noFill();
  for(let i = 0 ; i < graph.length ; i += 1){
    vertex(i, graph[i]);
  }
  endShape();
  
  t -= sliderT.value();
  
  if(graph.length > 250){
    graph.pop();
  }
}