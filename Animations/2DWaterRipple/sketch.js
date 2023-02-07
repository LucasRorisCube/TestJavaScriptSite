let n = 600;
let m = 600;

let current = [];
let prev = [];

let damping = 0.97;

function mouseDragged() {
  current[mouseX][mouseY] = 255;
  //prev[mouseX][mouseY] = 255;
}

function mousePressed() {
  current[mouseX][mouseY] = 255;
  //prev[mouseX][mouseY] = 255;
}

function setup() {
  pixelDensity(1);
  createCanvas(n, m);

  for (let i = 0; i < n; i += 1) {
    current.push(new Array(m));
    prev.push(new Array(m));
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      current[i][j] = 0;
      prev[i][j] = 0;
    }
  }

}

function draw() {
  background(0);
  
  if(frameCount % 15 == 0) {
    current[int(random(2, n-2))][int(random(2, m-2))] = 255;
  }

  loadPixels();

  for (let i = 1; i < n - 1; i += 1) {
    for (let j = 1; j < m - 1; j += 1) {
      current[i][j] = (prev[i + 1][j] + prev[i - 1][j] + prev[i][j - 1] + prev[i][j + 1]) / 2 - current[i][j];
      current[i][j] = current[i][j] * damping;

      let index = (i + j * n) * 4;
      pixels[index + 0] = current[i][j] * 255;
      pixels[index + 1] = current[i][j] * 255;
      pixels[index + 2] = current[i][j] * 255;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();

  let temp = prev;
  prev = current;
  current = temp;
}
