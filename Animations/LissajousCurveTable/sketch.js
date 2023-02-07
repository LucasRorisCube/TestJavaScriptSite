let cols = 10;
let rows = 10;

let theta = 0.0;

let proportion = 0.9;

let curves;

function setup() {
  createCanvas(600, 600);
  
  curves = new Array(cols*rows);
  
  for(let i = 0 ; i < curves.length ; i++){
    curves[i] = new Curve();
  }
  
}

function draw() {
  

  background(0);
  const stepX = width / cols;
  const stepY = height / rows;



  for(let i = 1 ; i < rows ; i++){
    let x = stepX/2;
    let y = i * stepY + stepY/2;

    noFill();
    stroke(255);
    strokeWeight(1);
    ellipse(x, y, stepX*proportion, stepY*proportion);

    const xp = x+stepX*proportion/2 * cos(i*theta-PI/2);
    const yp = y+stepY*proportion/2 * sin(i*theta-PI/2);

    stroke(255);
    strokeWeight(4);
    point(xp, yp);

    stroke(255, 100);
    strokeWeight(2);
    if(theta < TWO_PI) line(xp, yp, width, yp);
  }

  for(let i = 1 ; i < cols ; i++){
    let x = i* stepX + stepX/2;
    let y = stepY/2;

    noFill();
    stroke(255);
    strokeWeight(1);
    ellipse(x, y, stepX*proportion, stepY*proportion);

    const xp = x+stepX*proportion/2 * cos(i*theta-PI/2);
    const yp = y+stepY*proportion/2 * sin(i*theta-PI/2);

    stroke(255);
    strokeWeight(4);
    point(xp, yp);

    stroke(255, 100);
    strokeWeight(2);
    if(theta < TWO_PI) line(xp, yp, xp, height);
  }

  stroke(255);
  strokeWeight(2);
  for(let i = 1 ; i < cols ; i++){
    let x = i * stepX + stepX/2;
    for(let j = 1 ; j < rows ; j++){
      let y = j * stepY + stepY/2;
      const xp = x+stepX*proportion/2 * cos(i*theta-PI/2);
      const yp = y+stepY*proportion/2 * sin(j*theta-PI/2);


      point(xp, yp);

      curves[j + i * rows].addPoint(xp, yp);
    }
  }

  for(let i = 0 ; i < curves.length ; i++){
    curves[i].show();
  }

  if(theta < TWO_PI) theta += 0.01;
  
  
  
}