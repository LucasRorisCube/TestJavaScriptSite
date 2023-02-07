let maxD;

function setup() {
  createCanvas(600, 600, WEBGL);
  
  maxD = 90 * sqrt(2);
}

let angle = 0.0;


function draw() {
  background(200);
  
  rotateX(radians(-45));
  rotateY(radians(-35.254));
  
  ortho(-800, 800, -800, 800, -800, 1000);

  let numBarsX = 15;
  let numBarsZ = 15;
  let lenBars = 500;
  
  directionalLight(255, 255, 255, -1, 0, 0);
  
  let w = width / numBarsX;
  let h = height / numBarsZ;
  for (let j = 0; j <= numBarsZ; j += 1) {
    let mZ = map(j, 0, numBarsZ, -height/2, height/2);
    for (let i = 0; i <= numBarsX; i += 1) {
      push();
      let mX = map(i, 0, numBarsX, -width / 2, width / 2);
      let d = dist(mX, mZ, 0, 0);
      translate(mX, 0, mZ);
      let a = angle + map(d, 0, maxD, -1, 1);
      let len = map(sin(a), -1, 1, 200, lenBars);
      normalMaterial();
      box(w-2, len, h-2);
      pop();
    }
  }
  angle -= 0.05;
}
