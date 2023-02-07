let data = [];

let m, b;

let ratio = 1;
let currentErr = Infinity;

function setup() {
  createCanvas(600, 600);
  
  m = 0;
  b = 0;
  
}

function mousePressed(){
  let x = map(mouseX, 0, width, 0, 1);
  let y = map(mouseY, 0, height, 1, 0);
  
  currentErr = Infinity;
  
  data.push(createVector(x, y));
}

function drawLine(){
  
  const x1 = 0;
  const x2 = 1;
  
  const y1 = map(m * x1 + b, 0, 1, height, 0);
  const y2 = map(m * x2 + b, 0, 1, height, 0);
  
  stroke(255);
  strokeWeight(1);
  //print(y1);
  line(x1*width, y1, x2*width, y2);
  //print(x1, y1, x2, y2);
}

function verifyErr(a1, a2){
  
  let sum = 0;
  for(let p of data){
    
    const x = p.x;
    const yEstimated = a1 * x + a2;
    const delta = pow(yEstimated - p.y , 2);
    sum += delta;
  }
  
  return sum;
}

function newMethod(){
  let medianX = 0;
  let medianY = 0;
  for(let p of data){
    medianX += p.x;
    medianY += p.y;
  }
  medianX /= data.length;
  medianY /= data.length;
  
  let sum = 0;
  let sum2 = 0;
  for(let p of data){
    sum += (p.x - medianX)*p.y;
    sum2 += pow(p.x-medianX, 2);
  }
  
  const newM = sum/sum2;
  
  const newB = medianY - m*medianX;
  
  m = (m + newM) / 2;
  b = (b + newB) / 2;
}



function draw() {
  background(0);
  
  if(data.length > 1){
    
    newMethod();
  
//     let minErr = Infinity;
//     let bestM = Infinity;
//     let bestB = Infinity;
    

//     for(let i = 0 ; i < 1000 ; i++){
//       let a1 = m;
//       let a2 = b;
//       if(int(random(2)) == 1){
//         a1 = m + random(-ratio, ratio);
//         //print("hi")
//       } else {
//       //print("hi");
//         a2 = b + random(-ratio, ratio);
//       }
      
//       const err = verifyErr(a1, a2);
//       if(err < minErr){
//         minErr = err;
//         bestM = a1;
//         bestB = a2;
//         //print("entrei", bestB);
//       }
//     }
//     //print(minErr);
//     if((bestM != Infinity || bestM != Infinity) && minErr < currentErr){
//       m = bestM;
//       b = bestB;
//       currentErr = minErr;
//     }
  }
  
  //print(b);
  drawLine();
  
  for(let p of data){
    stroke(255);
    strokeWeight(8);
    const x = map(p.x, 0, 1, 0, width);
    const y = map(p.y, 0, 1, height, 0);
    point(x, y);
  }
}