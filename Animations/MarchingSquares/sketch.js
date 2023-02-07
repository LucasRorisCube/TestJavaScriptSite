const res = 6;
const half_res = res / 2;

let cols, rows;

let field;

let OSNoise;

function setup() {
  createCanvas(600, 600, P2D);
  
  OSNoise = new OpenSimplexNoise(Date.now());
  
  cols = 1 + width / res;
  rows = 1 + height / res;
  
  field = new Array(cols);
  for(let i = 0 ; i < field.length ; i++){
    field[i] = new Array(rows);
  }
  
  //FPS = 60;
  //frameRate(FPS);
  //createLoop({duration:3, gif:true});
  
  
}

function getState(a, b, c, d){
  return ceil(a) * 8 + ceil(b) * 4 + ceil(c) * 2 + ceil(d) * 1;
}

function drawLine(a, b){
  line(a.x, a.y, b.x, b.y);
}

function drawSquares(){
  for(let i = 0 ; i < cols-1 ; i++){
    for(let j = 0 ; j < rows-1 ; j++){
      
      const x = i * res;
      const y = j * res;
      
      const a = createVector(x + half_res, y);
      const b = createVector(x + res, y + half_res);
      const c = createVector(x + half_res, y + res);
      const d = createVector(x, y + half_res);
      
      const state = getState(field[i][j], field[i+1][j], field[i+1][j+1], field[i][j+1]);
      
      
      stroke(255);
      strokeWeight(1);
      switch(state){
        case 1:
          drawLine(c, d);
          break;
        case 2:
          drawLine(b, c);
          break;
        case 3:
          drawLine(b, d);
          break;
        case 4:
          drawLine(a, b);
          break;
        case 5:
          drawLine(a, d);
          drawLine(b, c);
          break;
        case 6:
          drawLine(a, c);
          break;
        case 7:
          drawLine(a, d);
          break;
        case 8:
          drawLine(a, d);
          break;
        case 9:
          drawLine(a, c);
          break;
        case 10:
          drawLine(a, b);
          drawLine(c, d);
          break;
        case 11:
          drawLine(a, b);
          break;
        case 12:
          drawLine(b, d);
          break;
        case 13:
          drawLine(b, c);
          break;
        case 14:
          drawLine(c, d);
          break;
      }
    }
  }
}
let zoff = 0;
function randomizeField(){
  let xoff = 0;
  for(let i = 0 ; i < cols ; i++){
    xoff += inc;
    let yoff = 0;
    for(let j = 0 ; j < rows ; j++){
      field[i][j] = OSNoise.noise3D(xoff, yoff, zoff);
      yoff += inc;
    }
  }
  zoff += 0.03;
}

function drawPoints(){
    for(let i = 0 ; i < cols ; i++){
      for(let j = 0 ; j < rows ; j++){

        const x = i * res;
        const y = j * res;

        fill(255*field[i][j]);
        noStroke();
        rect(x, y, res, res);
        //strokeWeight(10);
        //point(x, y);
      }
    }
}

let inc = 0.2;

function draw() {
  background(0);
  
  randomizeField();
  //drawPoints();
  drawSquares();
  

  
  
}