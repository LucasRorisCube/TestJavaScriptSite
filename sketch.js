function setup() {
  createCanvas(400,400);
}

let x=0



function draw() {
  background(220);
  line(mouseX,mouseY,width/2,height/2);
  if(x == 1){
    line(20,20,300,300);
  }
  
}

function desenhar(){
  line(20,20,300,300);
  print("oi");
  if(x == 0){
    x = 1;
  } else {
    x = 0;
  }
}