class Vector4D {
    constructor(x, y, z, w){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    copy(){
        return new Vector4D(this.x, this.y, this.z, this.w);
    }
}