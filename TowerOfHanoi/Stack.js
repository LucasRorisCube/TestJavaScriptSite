class stack{
  
  constructor(n, pos, h){
    this.h = h;
    this.x = pos[0];
    this.y = pos[1];
    
    this.n = n+1
    this.array = new Array(this.n);
    
    for(let i = 0 ; i < this.n ; i++){
      this.array[i] = -1;
    }
    
    this.currentLen = 0;
  }
  
  pop(){
    if(this.currentLen != 0){
      let value = this.array[this.currentLen-1];
      this.array[this.currentLen-1] = -1;
      this.currentLen -= 1;
      return value;
    }
  }
  
  push(value){
    if(this.currentLen <= this.n){
      this.array[this.currentLen] = value;
      this.currentLen += 1;
      
    }
  }
  
  show(){
    for(let i = 0 ; i < this.currentLen ; i++){
      this.array[i].show(this.x, this.y-i*this.h-this.h/2);
    }
  }
}