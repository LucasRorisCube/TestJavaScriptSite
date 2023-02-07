let x, y;
let state = 0;
let lenStep;
let stepsLeft = 1;
let currentStep = 0;
let number = 1;

let limitNumber = 3000;
let lenWindow = 600;

function setup() {
  
  createCanvas(lenWindow, lenWindow);
  background(0);
  frameRate(24000);
  
  lenStep = lenWindow/sqrt(limitNumber);
  
  x = width/2;
  y = height/2;
  
//   FPS = 60;
// frameRate(FPS);
// createLoop({duration:5, gif:true});
  
  
}

function isPrime(num){
  
  if(num == 1){
    return false;
  }
  if(num == 2){
    return true;
  }
  
  for(let i = 2 ; i*i <= num ; i += 1){
    if(num%i == 0){
      return false;
    }
  }
  return true;
}

let r = 0;
let angle = 0;

function draw() {
  
  for(let i = 0 ; i < 5 ; i++){

    number += 1;

    let prevX = x;
    let prevY = y;

    x = r*cos(angle)+width/2;
    y = r*sin(angle)+height/2;

    angle += 0.1;
    r += 0.2;


    strokeWeight(1);
    stroke(255);
    line(prevX, prevY, x, y);
    if(isPrime(number)){
      circle(x, y, lenStep/1.6);  
    }

    currentStep += 1;

    if(currentStep == int(stepsLeft)){
      stepsLeft += 0.5;
      currentStep = 0;
      state += 1;
      if(state == 4){
        state = 0;
      }
    }

    if(r > 1.4142*lenWindow/2){
      //noLoop();
    }
    
  }
  
}