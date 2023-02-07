let n1 = 1;
let n2 = 1.7;
let n3 = 1.7;
let m = 1;
let a = 1;
let b = 1;

let slider;
let sel;

function setup() {
  createCanvas(600, 600);
  
  sel = createSelect();
  sel.option('m');
  sel.option('n1');
  sel.option('n2');
  sel.option('n3');
  sel.option('a');
  sel.option('b');
  
  slider = createSlider(0.000001, 1, 1, 0.0000001);
  
}

function draw() {
  background(0);
  
  switch(sel.value()){
    case 'm':
      //m = map(slider.value(), 0.000001, 1, 1, 10);
      break;
    case 'n1':
      n1 = map(slider.value(), 0.000001, 1, 1, 100);
      break;
    case 'n2':
      n2 = map(slider.value(), 0.000001, 1, 1, 100);
      break;
    case 'n3':
      n3 = map(slider.value(), 0.000001, 1, 1, 100);
      break;
    case 'a':
      a = map(slider.value(), 0.000001, 1, 1, 100);
      break;
    case 'b':
      b = map(slider.value(), 0.000001, 1, 1, 100);
      break;
  }
  
  translate(width/2, height/2);
  
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  
  let scaleRadius = 100;
  
  for(let i = 0 ; i < 6*TWO_PI ; i += 0.01){
    
    let r1 = pow(pow(abs(1/a*cos(m/4*i)), n2) + pow(abs(1/b*sin(m/4*i)), n3), 1/n1);
    let r = 1/r1;
    
    const x = scaleRadius * r * cos(i);
    const y = scaleRadius * r * sin(i);
    
    vertex(x, y);
    
  }
  
  endShape(CLOSE);
  m += 0.002;
  n1 -= 0.004;
  //n2 -= 0.001;
  //a += 0.1;
  //b += 0.1;
}