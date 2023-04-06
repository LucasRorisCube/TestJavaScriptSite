class Ball {
    constructor(pos, angle, colour){

        this.vel = p5.Vector.fromAngle(angle);
        this.vel.setMag(50);

        this.pos = pos;

        this.colour = colour;

        this.path = [];
    }

    update(){
        this.pos.add(this.vel);
        this.path.push(this.pos.copy());
    }

    show(){
        fill(this.colour);
        noStroke();
        circle(this.pos.x, this.pos.y, 3);

        noFill();
        stroke(this.colour);
        strokeWeight(1);
        beginShape();
        for(let v of this.path){
            vertex(v.x, v.y);
        }
        endShape();
    }
}