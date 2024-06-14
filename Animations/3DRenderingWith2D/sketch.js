let points;
let connectionPoints;

let projectionM;
let rotationM;
let translateM;
let scaleM;

let angles = [];
let colors = [];

function setup() {
    createCanvas(600, 600);

    points = []
    points.push(createVector(-1, -1, 1));
    points.push(createVector(-1, 1, 1));
    points.push(createVector(1, 1, 1));
    points.push(createVector(1, -1, 1));
    points.push(createVector(-1, -1, -1));
    points.push(createVector(-1, 1, -1));
    points.push(createVector(1, 1, -1));
    points.push(createVector(1, -1, -1));

    connectionPoints = [];
    for(let i = 0 ; i < 4 ; i++){
        connectionPoints.push([i, (i+1)%4]);
        connectionPoints.push([i+4, ((i+1)%4)+4]);
        connectionPoints.push([i, i+4]);
    }
    
    

    projectionM = new Matrix(4, 4, [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]]);
    scaleM = getScaleM(1);

    for(let i = 0 ; i < 9 ; i++){
        angles.push(random(6));
    }

    for(let i = 0 ; i < 9 ; i++){
        colors.push(color(random(255), random(255), random(255)));
    }
    
}

function mouseClicked(){
    colors = [];
    for(let i = 0 ; i < 9 ; i++){
        colors.push(color(random(255), random(255), random(255)));
    }
}


function draw() {
    background(0);
    translate(width/2-400, height/2-200);
    for(let u = 0 ; u < 9 ; u++){
        if(u != 0 && u%3 == 0){
            translate(-400, 200);
        } else {
            translate(200, 0);
        }
        

        let newPoints = [];  
        for(let p of points){
            let transPoint = vectorToMatrix(p.copy());
            
            
            //let transformationM = multManyMatrix([projM, getRotationYM(angle), scaleM]);

            transPoint = matrixMult(getRotationXM(angles[u]), transPoint);
            transPoint = matrixMult(getRotationYM(angles[u]), transPoint);
            transPoint = matrixMult(getRotationZM(angles[u]), transPoint);
            
            let z = 1/(transPoint.matrix[2][0]-3);
            let projM = new Matrix(4, 4, [[z, 0, 0, 0],[0, z, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]]);

            transPoint = matrixMult(projM, transPoint);
            //transPoint = matrixMult(projectionM, transPoint);
            
            transPoint = matrixMult(getScaleM(100), transPoint);

            //transPoint = matrixMult(transformationM, transPoint)
            newPoints.push(transPoint);
            
        }
        angles[u] += 0.01;
        
        for(let p of newPoints){
            drawMatrixToPoint(p, colors[u]);
        }
        strokeWeight(3);
        stroke(colors[u]);
        for(let connection of connectionPoints){
            let a = connection[0];
            let b = connection[1];
            line(newPoints[a].matrix[0][0], newPoints[a].matrix[1][0], newPoints[b].matrix[0][0], newPoints[b].matrix[1][0]);
        }
    }
    
    
}