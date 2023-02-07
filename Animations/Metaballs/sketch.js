var blobs = [];

var codingTrainColors;
var colorGradiant;

function setup() {
  createCanvas(400, 400);
  for (i = 0; i < 10; i++) {
    blobs.push(new Blob(random(0, width), random(0, height)));
  }

  codingTrainColors = [
    "#0B6A88",
    // "#70327E",
    "#2DC5F4",
    "#9253A1",
    // "#A42963",
    // "#EC015A",
    // "#F063A4",
    "#F16164",
    // "#F89E4F",
    "#FCEE21",
    "#FFFFFF",
  ].map((c) => color(c));

  colorGradiant = Array.from({ length: 1000 }).map((_, i, arr) => {
    return lerpColors(codingTrainColors, i / arr.length);
  });

}

function lerpColors(colors, amt) {
  amt = constrain(amt, 0, 0.99999);
  const scaledAmt = amt * (colors.length - 1);
  const aIndex = floor(scaledAmt);
  const bIndex = aIndex + 1;
  const a = colors[aIndex];
  const b = colors[bIndex];
  const newAmt = scaledAmt - floor(scaledAmt);
  return lerpColor(a, b, newAmt);
}

function makeColor(sum) {
  let amt = map(sum, 0, width * 2, 0, 1);
  amt = constrain(amt, 0, 0.99999);
  return colorGradiant[floor(amt * colorGradiant.length)];
}


function draw() {

  background(51);

  loadPixels();
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      let sum = 0;
      for (i = 0; i < blobs.length; i++) {
        let xdif = x - blobs[i].x;
        let ydif = y - blobs[i].y;
        let d = sqrt(xdif * xdif + ydif * ydif);
        sum += (10 * blobs[i].r) / d;
      }
      set(x, y, makeColor(sum));
    }
  }
  updatePixels();

  for (i = 0; i < blobs.length; i++) {
    blobs[i].update();
  }
}
