let r = 250;
let pi;

let myColours;

function preload() {
  pi = loadStrings("oneMillionPi.txt");
}

let digits;
let currentDigit = 0;
let prevDigit = 0;
let index = 0;
let alp = 10;
function setup() {
  createCanvas(600, 600);

  digits = pi[0].split("");
  digits.splice(1, 1);

  currentDigit = digits[1];
  prevDigit = digits[0];
  index = 1;
  
  myColours = [
    color(88, 51, 29, alp),
    color(255, 136, 77, alp),
    color(78, 32, 122, alp),
    color(205, 95, 211, alp),
    color(4, 101, 102, alp),
    color(28, 229, 227, alp),
    color(3, 65, 147, alp),
    color(1, 128, 255, alp),
    color(54, 78, 40, alp),
    color(148, 195, 99, alp),
  ];

  // setup draw

  background(0);

  translate(width / 2, height / 2);
  let currentColor = 0;
  for (let i = 0; i < 10; i += 1) {
    const theta = map(i, 0, 10, -HALF_PI, TWO_PI-HALF_PI);
    const phi = theta + 0.5;
    
    let cColor = myColours[currentColor++];
    cColor.setAlpha(255);
    stroke(cColor);
    strokeWeight(10);
    noFill();
    arc(0, 0, 2 * r, 2 * r, theta, phi);
  }
  
  for(let i = 0 ; i < myColours.length ; i += 1){
    myColours[i].setAlpha(alp);
  }
}

function gradientLine(x1, y1, x2, y2, color1, color2) {
  // linear gradient from start to end of line
  var grad = this.drawingContext.createLinearGradient(x1, y1, x2, y2);
  grad.addColorStop(0, color1, 100);
  grad.addColorStop(1, color2, 100);

  this.drawingContext.strokeStyle = grad;
  
  //bezier(x1, y1, 0, 0, 0, 0, x2, y2);
  
  //bezier(x1, y1, -x1/2, -y1/2, -x2/2, -y2/2, x2, y2); //Legal

  const factor = 2;
  //bezier(x1, y1, -x2/factor, -y2/factor, -x1/factor, -y1/factor, x2, y2);// Mt Legal
  bezier(x1, y1, -x2/2, -y2/2, -x1/2, -y1/2, x2, y2);// Mt Legal
  // bezier(x1, y1, -x2/2, -y2/2, -x1/2, -y1/2, x2, y2);// Mt Legal
  // bezier(x1, y1, -x2/2, -y2/2, -x1/2, -y1/2, x2, y2);// Mt Legal
  //bezier(x1, y1, -x2/2, -y2/2, -x1/2, -y1/2, x2, y2);// Mt Legal
  
  
  //bezier(x1, y1, x2/factor, y2/factor, x1/factor, y1/factor, x2, y2);

  //line(x1, y1, x2, y2); Legal
}

function draw() {
  
  translate(width / 2, height / 2);
  for(let i = 0 ; i < 20 ; i++){
    

    let theta = map(prevDigit, 0, 10, -HALF_PI, TWO_PI-HALF_PI);
    let phi = theta + 0.5;
    const Astart = random(theta, phi);

    let xStart = r * cos(Astart);
    let yStart = r * sin(Astart);

    theta = map(currentDigit, 0, 10, -HALF_PI, TWO_PI-HALF_PI);
    phi = theta + 0.5;
    const Aend = random(theta, phi);

    let xEnd = r * cos(Aend);
    let yEnd = r * sin(Aend);

    strokeWeight(1);
    gradientLine(xStart, yStart, xEnd, yEnd, myColours[prevDigit], myColours[currentDigit]);

    prevDigit = currentDigit;
    index += 1;
    currentDigit = digits[index];
  }
  if(index > 30000){
    background(0);

    //translate(width / 2, height / 2);
    let currentColor = 0;
    for (let i = 0; i < 10; i += 1) {
      const theta = map(i, 0, 10, -HALF_PI, TWO_PI-HALF_PI);
      const phi = theta + 0.5;

      let cColor = myColours[currentColor++];
      cColor.setAlpha(255);
      stroke(cColor);
      strokeWeight(10);
      noFill();
      arc(0, 0, 2 * r, 2 * r, theta, phi);
    }

    for(let i = 0 ; i < myColours.length ; i += 1){
      myColours[i].setAlpha(alp);
    }
    currentDigit = digits[1];
    prevDigit = digits[0];
    index = 1;
  }
}
