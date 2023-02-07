class Pendulum {
  constructor(r1, r2, m1, m2, theta1, theta2, colour) {
    this.r1 = r1;
    this.r2 = r2;

    this.m1 = m1;
    this.m2 = m2;

    this.theta1 = theta1;
    this.theta2 = theta2;
    
    this.a1_v = 0.0;
    this.a2_v = 0.0;

    this.a1_a = 0.0;
    this.a2_a = 0.0;
    
    this.x1 = this.r1 * sin(this.theta1);
    this.y1 = this.r1 * cos(this.theta1);
    
    this.x2 = this.x1 + this.r2 * sin(this.theta2);
    this.y2 = this.y1 + this.r2 * cos(this.theta2);
    
    this.colour = colour;
  }

  update() {
    this.x1 = this.r1 * sin(this.theta1);
    this.y1 = this.r1 * cos(this.theta1);

    this.x2 = this.x1 + this.r2 * sin(this.theta2);
    this.y2 = this.y1 + this.r2 * cos(this.theta2);

    this.a1_a =
      (-g * (2 * this.m1 + this.m2) * sin(this.theta1) -
        this.m2 * g * sin(this.theta1 - 2 * this.theta2) -
        2 *
          sin(this.theta1 - this.theta2) *
          this.m2 *
          (this.a2_v * this.a2_v * this.r2 + this.a1_v * this.a1_v * this.r1 * cos(this.theta1 - this.theta2))) /
      (this.r1 * (2 * this.m1 + this.m2 - this.m2 * cos(2 * this.theta1 - 2 * this.theta2)));

    this.a2_a =
      (2 *
        sin(this.theta1 - this.theta2) *
        (this.a1_v * this.a1_v * this.r1 * (this.m1 + this.m2) +
          g * (this.m1 + this.m2) * cos(this.theta1) +
          this.a2_v * this.a2_v * this.r2 * this.m2 * cos(this.theta1 - this.theta2))) /
      (this.r2 * (2 * this.m1 + this.m2 - this.m2 * cos(2 * this.theta1 - 2 * this.theta2)));

    this.a1_v += this.a1_a;
    this.a2_v += this.a2_a;
    //print(this.a1_v);

    if (this.a1_v > limitV || this.a1_v < -limitV) {
      this.a1_v = limitV;
     // print("Limit1");
    }

    if (this.a2_v > limitV  || this.a2_v < -limitV) {
      this.a2_v = limitV;
      //print("Limit2");
    }

    this.theta1 += this.a1_v;
    this.theta2 += this.a2_v;
  }

  show() {
    stroke(this.colour);
    strokeWeight(2);
    line(0, 0, this.x1, this.y1);
    line(this.x1, this.y1, this.x2, this.y2);

  }
}
