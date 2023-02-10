class Matrix {
    constructor(N, M, values){
        if(values.length != N || values[0].length != M){
            print("Error in matrix creation");
            return;
        }
        this.N = N;
        this.M = M;

        this.matrix = new Array(this.N);
        for(let i = 0 ; i < this.N ; i++){
            this.matrix[i] = new Array(this.M);
        }

        for(let i = 0 ; i < this.N ; i++){
            for(let j = 0 ; j < this.M ; j++){
                this.matrix[i][j] = values[i][j];
            }
        }
    }

    printM(){
        for(let i = 0 ; i < this.N ; i++){
            for(let j = 0 ; j < this.M ; j++){
                print(this.matrix[i][j], " ");
            }
            print();
        }
    }

}

function matrixMult(A, B){
    if(A.M != B.N){
        print("Error in matrix multiplication");
        return;
    }

    let values = new Array(A.N);
    for(let i = 0 ; i < A.N ; i++){
        values[i] = new Array(B.M);
    }

    for(let u = 0 ; u < A.N ; u++){
        for(let k = 0 ; k < B.M ; k++){
            let sum = 0;
            for(let i = 0 ; i < A.M ; i++){

                //print(u, i, i, k, A.matrix[u][i], B.matrix[i][k]);
                sum += A.matrix[u][i] * B.matrix[i][k];
                
            }
            values[u][k] = sum;
        }
    }

    let result = new Matrix(A.N, B.M, values);
    return result;
}

function multManyMatrix(matrixs){

    let A = matrixs[0];
    let i = 1;
    while(i < matrixs.length){
        A = matrixMult(A, matrixs[i]);
        i++;
    }

    return A;
    
}

function vectorToMatrix(vec){
    let matrix = new Matrix(4, 1, [[vec.x], [vec.y], [vec.z], [1]]);
    return matrix;
}

function getScaleM(factor){
    return new Matrix(4, 4, [[factor, 0, 0, 0], [0, factor, 0, 0], [0, 0, factor, 0], [0, 0, 0, 1]]);
}

function getTranslate(vec){
    return new Matrix(4, 4, [[1, 0, 0, vec.x], [0, 1, 0, vec.y], [0, 0, 1, vec.z], [0, 0, 0, 1]]);
}

function getRotationXM(angle){
    return new Matrix(4, 4, [[1, 0, 0, 0], [0, cos(angle), -sin(angle), 0], [0, sin(angle), cos(angle), 0], [0, 0, 0, 1]]);
}

function getRotationYM(angle){
    return new Matrix(4, 4, [[cos(angle), 0, sin(angle), 0], [0, 1, 0, 0], [-sin(angle), 0, cos(angle), 0], [0, 0, 0, 1]]);
}

function getRotationZM(angle){
    return new Matrix(4, 4, [[cos(angle), -sin(angle), 0, 0], [sin(angle), cos(angle), 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
}

function drawMatrixToPoint(matrix){
    noFill();
    stroke(255);
    strokeWeight(8);
    //print(matrix.matrix[0][0], matrix.matrix[1][0]);
    point(matrix.matrix[0][0], matrix.matrix[1][0]);
}