
let numberOfBars = 2000;

let numbers;

function setup() {
  
  createCanvas(600, 300);
  
  numbers = new Array(numberOfBars);
  
  for(let i = 0 ; i < numberOfBars ; i++){
    numbers[i] = random()*height;
  }
}

let i = 0;
let j = numberOfBars;

function draw() {
  background(0);
  
  for(let n = 0 ; n < 10000 ; n++){
    if(numbers[i] < numbers[i+1]){
      let temp = numbers[i];
      numbers[i] = numbers[i+1];
      numbers[i+1] = temp;
    }
    i++;
    if(i > j){
      i = 0;
      j--;
    }
  }
  if(j <= 0){
    noLoop();
  }
  
  fill(255);
  noStroke();
  
  colorMode(HSB, 100);
  for(let k = 0 ; k < numberOfBars ; k++){
    fill(map(numbers[k],0,height,0,100),100,100);
    rect(k*width/numberOfBars, numbers[k], 0.9*width/numberOfBars, height);
  }
}