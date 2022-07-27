



let pos = [[110,300], [300,300], [490,300]]

let n = 6;

let bars;

let moves;

let currentMove = 0;


function setup(){
  
}

let canStart = 0;

function start() {
  
  document.getElementById('button').style.visibility = 'hidden';
  document.getElementById('n').style.visibility = 'hidden';
  n = document.getElementById('n').value;
  
  moves = new Array(2**n);
  bars = new Array(3);
  
  createCanvas(600, 400);
  frameRate(10);
  
  let length = 140;
  let heightIndividual = 150/n;
  
  for(let i = 0 ; i < 3 ; i++){
    let bar = new stack(n, pos[i], heightIndividual);
    bars[i] = bar;
  }
  
  for(let i = 0 ; i < n ; i++){
    let lay = new Layer(random()*255,random()*255,random()*255, length, heightIndividual);
    length -= 100/n;
    bars[0].push(lay);
  }
  haloi(n, 0, 2);
  currentMove = 0;
  canStart = 1;
}

let flag = 0;

let finishedStep = 0;


function draw() {
  if(canStart == 0){
    
  } else {
    
  
    background(0);
    noStroke();

    fill(255);
    rectMode(CORNER);
    rect(60,300,480,20);

    rect(100,100, 20, 220)
    rect(290,100, 20, 220)
    rect(480,100, 20, 220)


    for(let i = 0 ; i < 3 ; i++){
      bars[i].show();
    }

    let toMove = moves[currentMove];

    if(currentMove < 2**n-1){

      let aux = bars[toMove[0]].pop();
      bars[toMove[1]].push(aux);
      currentMove += 1;
      
    } else {
      document.getElementById('button').style.visibility = 'visible';
  document.getElementById('n').style.visibility = 'visible';
      canStart = 0;
      currentMove = 0;
      flag = 0;

      finishedStep = 0;
    }
  }
}

function drawMove(start, end){

  moves[currentMove] = [start,end];
  currentMove += 1;

}

function haloi(n, start, end){
  if(n == 1){
    drawMove(start, end);
  } else {
    let other = 3 - (start + end);
  
    haloi(n-1,start, other);
    drawMove(start, end);
    haloi(n-1, other, end);
  }
  
}