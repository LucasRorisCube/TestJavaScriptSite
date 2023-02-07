let x, y;
let state = 0;
let lenStep;
let stepsLeft = 1;
let currentStep = 0;

let limitNumber = 30000000;
let lenCircle = 1.5;
let lenWindow = 600;

let data;
function preload() {
  data = loadStrings('primeNumbers.txt');
}

function setup() {
  
  createCanvas(lenWindow, lenWindow);
  background(0);
  frameRate(24000);
  
  lenStep = lenWindow/sqrt(limitNumber);
  lenStep = 0.005;
  
  x = width/2;
  y = height/2;
  
  strokeWeight(1);
  stroke(255);
  

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

let index = 0;

function draw() {

  let number = data[index];

  for(let i = 0 ; i < 50 ; i++){
    number = data[index];
    x = (number*cos(number))*lenStep+width/2;
    y = (number*sin(number))*lenStep+height/2;


    //strokeWeight(1);
    //stroke(255);
    noStroke();
    circle(x, y, lenCircle);  

    index += 1;

    if(index >= data.length){
      print("Done.");
      noLoop();
    }
    
  }
  
}