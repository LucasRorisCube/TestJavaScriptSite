function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  }

class Ellipse {
    constructor(center, w, h){
        this.center = center;
        this.w = w;
        this.h = h;

        this.a = w/2;
        this.b = h/2;
        this.c = sqrt(this.a*this.a-this.b*this.b);

        this.f1 = createVector(this.center.x-this.c, this.center.y);
        this.f2 = createVector(this.center.x+this.c, this.center.y);
    
        this.maxDist = dist(this.f1.x, this.f1.y, this.center.x, this.center.y+this.b)+dist(this.f2.x, this.f2.y, this.center.x, this.center.y+this.b);
    }

    updateBallPos(ball){

        ball.path.pop();

        let v = ball.vel.copy();
        v.setMag(0.01);
        while(!this.isInside(ball)){
            ball.pos.sub(v);
        }
        ball.path.push(ball.pos.copy());
    }

    rebound(ball){

        this.updateBallPos(ball);
        
        let yl = -(this.b*this.b) / (this.a*this.a) * ball.pos.x / ball.pos.y;

        let h = ball.pos.y - (-1/yl) * ball.pos.x;

        let x1 = -1000;
        let y1 = -1/yl * x1 + h;

        let x2 = 1000;
        let y2 = -1/yl * x2 + h;
        
        let v1;
        if(ball.pos.y > this.center.y){
            if(ball.pos.x > this.center.x){
                v1 = createVector(-abs(x1-x2), -abs(y1-y2));
            } else {
                v1 = createVector(+abs(x1-x2), -abs(y1-y2));
            }
        } else {
            if(ball.pos.x > this.center.x){
                v1 = createVector(-abs(x1-x2), +abs(y1-y2));
            } else {
                v1 = createVector(+abs(x1-x2), +abs(y1-y2));
            }
        }
        
        let ang = v1.angleBetween(ball.vel);
        v1.setHeading((v1.heading()-ang)+PI);
 
        ball.vel.setHeading(v1.heading());

        //while(!this.isInside(ball)){
        //    ball.update();
        //}
    }

    

    isInside(ball){
        let x = ball.pos.x;
        let y = ball.pos.y;

        let dist1 = dist(this.f1.x, this.f1.y, x, y);
        let dist2 = dist(this.f2.x, this.f2.y, x, y);
        //print(dist(this.f1.x, this.f1.y, x, y)+dist(this.f2.x, this.f2.y, x, y));
        if(dist1+dist2 >= this.maxDist){
            return false;
        } else {
            return true;
        }
    }

    show(){
        noFill();
        stroke(255);
        strokeWeight(3);
        ellipse(this.center.x, this.center.y, this.w, this.h)
        
        fill(255);
        circle(this.f1.x, this.f1.y, 10);
        circle(this.f2.x, this.f2.y, 10);

    }
}