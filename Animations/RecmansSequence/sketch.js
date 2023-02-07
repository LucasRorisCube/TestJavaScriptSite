let index = 0;
let count = 1;

let numbers = [true];
let sequence = [0];

let arcs = [];

let biggest = -1;

function setup() {
  createCanvas(600, 600);
}

function resetAll(){
  index = 0;
  count = 1;

  numbers = [true];
  sequence = [0];

  arcs = [];

  biggest = -1;
}

function step(){
  let next = index - count;
  let flip = false;
  if(next < 0 || numbers[next]){
    next = index + count;
    flip = true;
  }
  numbers[next] = true;
  sequence.push(next);
  index = next;
  count++;
  
  if(index > biggest){
    biggest = index;
  }
  
  const x = (next + sequence[sequence.length-2] ) / 2;
  const y = 0;
  
  if(flip){
    arcs.push(new Arc(x, y, abs(next - x), PI, TWO_PI));
  } else {
    arcs.push(new Arc(x, y, abs(next - x), 0, PI));
  }
  
}

function draw() {
  step();
  
  background(0);
  translate(0, height/2);
  
  scale(width/biggest);
  
  for(let a of arcs){
    a.show();
  }
  
  if(sequence.length > 500){
    resetAll();
  }
}