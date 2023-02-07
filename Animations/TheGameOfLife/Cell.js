class Cell {
  constructor(x, y, w, h) {
    this.state = 0;
    if (random(1) < 0.5) {
      this.state = 1;
    }
    
    this.oldState = 0;

    this.pos = createVector(x, y);
    this.w = w;
    this.h = h;
  }
  
  resetState(){
    this.state = 0;
    if (random(1) < 0.5) {
      this.state = 1;
    }
    
    this.oldState = 0;
  }

  update() {
    
    const indexX = floor(this.pos.y / resolution);
    const indexY = floor(this.pos.x / resolution);
    
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        const row = (indexX + i + rows) % rows;
        const col = (indexY + j + cols) % cols;

        sum += cells[row][col].oldState;
      }
    }
    sum -= cells[indexX][indexY].oldState;

    if (this.oldState == 0 && sum == 3) {
      this.state = 1;
    } else if (this.oldState == 1 && (sum < 2 || sum > 3)) {
      this.state = 0;
    }
  }

  updateState() {
    this.oldState = this.state;
  }

  show() {
    if (this.state == 1) {
      fill(255);
      rect(this.pos.x, this.pos.y, this.w, this.h);
    }
  }
}
