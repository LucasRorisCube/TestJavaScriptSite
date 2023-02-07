let cells;

let cols;
let rows;

let resolution = 10;

function setup() {
  createCanvas(600, 600);
  
  cols = width / resolution;
  rows = height / resolution;
  
  cells = new Array(rows);
  
  for(let i = 0 ; i < cells.length ; i++){
    cells[i] = new Array(cols);
  }
  
  let x = 0;
  let y = 0;
  
  for(let i = 0 ; i < rows ; i++){
    for(let j = 0 ; j < cols ; j++){
      cells[i][j] = new Cell(x, y, resolution-1, resolution-1);
      x += resolution;
      if(x >= width){
        x = 0;
        y += resolution;
      }
    }
  }
}

function mousePressed(){
  for(let i = 0 ; i < rows ; i++){
    for(let j = 0 ; j < cols ; j++){
      cells[i][j].resetState();
    }
  }
}

function draw() {
  background(0);
  
  
  for(let i = 0 ; i < rows ; i++){
    for(let j = 0 ; j < cols ; j++){
      cells[i][j].updateState();
    }
  }
  if(frameCount % 2 == 0){
    for(let i = 0 ; i < rows ; i++){
      for(let j = 0 ; j < cols ; j++){
        cells[i][j].update();

      }
    }
  }
  for(let i = 0 ; i < rows ; i++){
    for(let j = 0 ; j < cols ; j++){
      cells[i][j].show();
    }
  }
}