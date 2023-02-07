let drawing = [];
let fourierT = [];

let t = 0.0;

let state = -1;

function mousePressed() {
  state = 0;
  drawing = [];
  fourierT = [];
  graph = [];
  t = 0;
}

function mouseReleased(){
  state = 1;
  fourierT = dft(drawing);
  fourierT.sort((a,b) => b.ampli - a.ampli);
  
}

function dft(signal) {
  
  let N = signal.length;
  let coeff = new Array(N);

  for (let k = 0; k < N; k += 1) {
    let sumRe = 0;
    let sumIm = 0;
    for (let n = 0; n < N; n += 1) {
      let phi = (TWO_PI * k * n) / N;
      sumRe += signal[n].x * cos(phi) + signal[n].y*sin(phi);
      sumIm += -1 * signal[n].x * sin(phi) + signal[n].y*cos(phi);
    }
    sumRe = sumRe / N;
    sumIm = sumIm / N;

    let ampli = sqrt(sumRe * sumRe + sumIm * sumIm);
    let phases = atan2(sumIm, sumRe);

    coeff[k] = {
      re: sumRe,
      im: sumIm,
      frequency: k,
      ampli: ampli,
      phases: phases,
    };

  }
  return coeff;
}

function setup() {
  createCanvas(600, 600);
}

let graph = [];

function draw() {
  background(0);

  if (state == 0) {
    
    drawing.push({x:mouseX-width/2, y:mouseY-height/2});
    noFill();
    stroke(255);
    translate(width/2, height/2);
    beginShape();
    for(let i = 0 ; i < drawing.length ; i += 1){
      vertex(drawing[i].x, drawing[i].y);
    }
    endShape();
    
  } else if (state == 1) {
    
    //translate(width / 4, height / 2);
    //translate(width / 2 - 50, height / 2 - 50);

    let x = width / 2;
    let y = height / 2;

    let prevX = width / 2;
    let prevY = height / 2;
    
    let N = fourierT.length;

    for (let i = 0; i < N; i += 1) {
      let r = 1;
      let c = fourierT[i];

      prevX = x;
      prevY = y;

      x += c.ampli * cos(t * c.frequency + c.phases);
      y += c.ampli * sin(t * c.frequency + c.phases);

      fill(255);
      stroke(255);
      line(x, y, prevX, prevY);

      stroke(255, 100);
      noFill();
      circle(prevX, prevY, 2*c.ampli);
    }

    graph.unshift({x:x, y:y});

    beginShape();
    stroke(255);
    noFill();
    for (let i = 0; i < graph.length; i += 1) {
      vertex(graph[i].x, graph[i].y);
    }
    endShape();

    const dt = TWO_PI / fourierT.length;
    t += dt;
    if (t > TWO_PI) {
      t = 0;
      graph = [];
    }

  }
}
