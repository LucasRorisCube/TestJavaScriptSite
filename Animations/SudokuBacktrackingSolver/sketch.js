let table = []
let space = 25;

let state = "UnSolved";

function mousePressed(){
  
  if(mouseX > width-space || mouseX < 0+space || mouseY > height-space || mouseY < 0+space){
    return;
  }

  if(state == "UnSolved"){
  
    let xoffset = (width-2*space)/9;
    let yoffset = (height-2*space)/9;
    
    let xIndex = floor((mouseX-space)/xoffset);
    let yIndex = floor((mouseY-space)/yoffset);
    
    table[yIndex][xIndex].number += 1;
    if(table[yIndex][xIndex].number >= 10){
      table[yIndex][xIndex].number = 0;
      table[yIndex][xIndex].fixed = false;
    } else {
      table[yIndex][xIndex].fixed = true;
    }

  } else {
    reset();
    state = "UnSolved";
  }
  
}

function reset(){
  for(let i = 0 ; i < 9 ; i+=1){
    for(let j = 0 ; j < 9 ; j+=1){
      if(!table[i][j].fixed){
        table[i][j].number = 0;
      }
      table[i][j].colour = color(255, 255, 255);
    }
  }
}

let slider;

function setup() {
  createCanvas(600, 600);
  
  table = new Array(9);
  for(let i = 0 ; i < 9 ; i+=1){
    table[i] = new Array(9);
  }
  
  for(let i = 0 ; i < 9 ; i+=1){
    for(let j = 0 ; j < 9 ; j+=1){
      table[i][j] = {number:0, colour: color(255, 255, 255), fixed: false};
    }
  }
  
  slider = createSlider(0, 1, 0.4, 0);
  
}

function drawBoard(){
  
  let xoffset = (width-2*space)/9;
  let yoffset = (height-2*space)/9;
  
  let count = 3;
  for(let x = space ; x < width-space ; x += xoffset){
    stroke(255);
    
    if(count == 3){
      strokeWeight(5);
      count = 0;
    } else {
      strokeWeight(1);
    }
    
    line(x, space, x, height-space);
    count += 1;
  }
  
  count = 3;
  for(let y = space ; y < height-space ; y += yoffset){
    
    if(count == 3){
      strokeWeight(5);
      count = 0;
    } else {
      strokeWeight(1);
    }
    
    stroke(255);
    
    line(space, y, width-space, y);
    count += 1;
  }
  
  
  
  let x = 2*space;
  let y = yoffset;
  
  textSize(25);
  strokeWeight(1);
  
  
  for(let i = 0 ; i < 9 ; i+=1){
    for(let j = 0 ; j < 9 ; j+=1){
      if(table[i][j].number != 0){
        fill(table[i][j].colour);
        stroke(table[i][j].colour);
      } else {
        fill(0);
        stroke(0);
      }
      text(table[i][j].number, x, y);
      x += xoffset;
    }
    x = 2*space;
    y += yoffset;
  }
}

function draw() {
  background(0);
  
  drawBoard();
  
  
}