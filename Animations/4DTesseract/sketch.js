let points;
let connectionPoints;

let projectionM;
let rotationM;
let translateM;
let scaleM;

function setup() {
    createCanvas(600, 600, WEBGL);

    points = []
    points.push(new Vector4D(-1, -1, 1, 1));
    points.push(new Vector4D(-1, 1, 1, 1));
    points.push(new Vector4D(1, 1, 1, 1));
    points.push(new Vector4D(1, -1, 1, 1));
    points.push(new Vector4D(-1, -1, -1, 1));
    points.push(new Vector4D(-1, 1, -1, 1));
    points.push(new Vector4D(1, 1, -1, 1));
    points.push(new Vector4D(1, -1, -1, 1));

    points.push(new Vector4D(-1, -1, 1, -1));
    points.push(new Vector4D(-1, 1, 1, -1));
    points.push(new Vector4D(1, 1, 1, -1));
    points.push(new Vector4D(1, -1, 1, -1));
    points.push(new Vector4D(-1, -1, -1, -1));
    points.push(new Vector4D(-1, 1, -1, -1));
    points.push(new Vector4D(1, 1, -1, -1));
    points.push(new Vector4D(1, -1, -1, -1));

    connectionPoints = [];
    for(let i = 0 ; i < 4 ; i++){
        connectionPoints.push([i, (i+1)%4]);
        connectionPoints.push([i+4, ((i+1)%4)+4]);
        connectionPoints.push([i, i+4]);

        connectionPoints.push([i+8, (i+8+1)%4+8]);
        connectionPoints.push([i+8+4, ((i+8+1)%4)+12]);
        connectionPoints.push([i+8, i+8+4]);

        connectionPoints.push([i, i+8]);
        connectionPoints.push([i+4, i+12]);
    }
    
    

    //projectionM = new Matrix(4, 4, [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]]);
    scaleM = getScaleM(100);
    
}

let angle = 0.0;

function draw() {
    background(0);

    //translate(width/2, height/2);
    orbitControl(10, 10, 10);
    rotateY(angle);
    rotateX(angle);

    let newPoints = [];  
    for(let p of points){
        let transPoint = vectorToMatrix(p.copy());
        
        
        //let transformationM = multManyMatrix([projM, getRotationYM(angle), scaleM]);

        //transPoint = matrixMult(getRotationXM(PI/3), transPoint);
        //transPoint = matrixMult(getRotationZM(angle), transPoint);
        //transPoint = matrixMult(getRotationXM(PI/4), transPoint);
        
        transPoint = matrixMult(getRotationZWM(angle), transPoint);
        //transPoint = matrixMult(getRotationZM(angle), transPoint);
        
        let w = 1/(transPoint.matrix[3][0]-3);
         let projM = new Matrix(4, 4, [[w, 0, 0, 0],[0, w, 0, 0], [0, 0, w, 0], [0, 0, 0, 0]]);
        //let projM = new Matrix(4, 4, [[1, 0, 0, 0],[0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]]);

        transPoint = matrixMult(projM, transPoint);
        //transPoint = matrixMult(projectionM, transPoint);
        
        transPoint = matrixMult(getScaleM(200), transPoint);

        //transPoint = matrixMult(transformationM, transPoint)
        newPoints.push(transPoint);
        
    }
    angle += 0.015;

    for(let p of newPoints){
        drawMatrixToPoint(p);
    }
    strokeWeight(1);
    for(let connection of connectionPoints){
        let a = connection[0];
        let b = connection[1];
        line(newPoints[a].matrix[0][0], newPoints[a].matrix[1][0], newPoints[a].matrix[2][0],
            newPoints[b].matrix[0][0], newPoints[b].matrix[1][0], newPoints[b].matrix[2][0]);
    }
}