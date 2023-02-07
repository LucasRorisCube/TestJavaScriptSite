let img;

let spots;

function preload() {
  img = loadImage("myLogo.png");
}

let circles = [];

function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);

  spots = new Array(img.width * img.height);

  img.loadPixels();

  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      const index = (x + y * img.width) * 4;
      const median =
        (img.pixels[index] + img.pixels[index + 1] + img.pixels[index + 2]) / 3;
      if (median > 10) {
        spots[x + y * img.width] = true;
      } else {
        spots[x + y * img.width] = false;
      }
    }
  }

  img.updatePixels();

}

function canCreateCircle(x, y) {
  let can = true;
  if (spots[x + y * width] == false) {
    return false;
  }

  for (let c of circles) {
    const dx = x - c.x;
    const dy = y - c.y;
    const d = sqrt(dx * dx + dy * dy);

    if (d < c.r) {
      can = false;
      break;
    }
  }

  return can;
}

function draw() {
  background(0);
  let created = 0;
  while (created < 5) {
    let x = floor(random(width));
    let y = floor(random(height));

    if (canCreateCircle(x, y)) {
      circles.push(new Circle(x, y));
      created += 1;
    }
  }

  for (let c of circles) {
    c.update();
    c.grow();
    c.show();
  }
}
