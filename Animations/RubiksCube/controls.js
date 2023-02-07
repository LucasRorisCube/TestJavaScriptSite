function keyPressed(){
  
  let flag = true;
  
  if(!currentMove.animating){
    switch(key){
      case 'r': // r
        currentMove = allMoves[4];
        break;
      case 'R': // R
        currentMove = allMoves[5];
        break;
      case 'l': // r
        currentMove = allMoves[7];
        break;
      case 'L': // R
        currentMove = allMoves[6];
        break;
      case 'u': // r
        currentMove = allMoves[2];
        break;
      case 'U': // r
        currentMove = allMoves[3];
        break;
      case 'd': // r
        currentMove = allMoves[1];
        break;
      case 'D': // r
        currentMove = allMoves[0];
        break;
      case 'f': // r
        currentMove = allMoves[8];
        break;
      case 'F': // r
        currentMove = allMoves[9];
        break;
      case 'b': // r
        currentMove = allMoves[11];
        break;
      case 'B': // r
        currentMove = allMoves[10];
        break;
      case ' ':
        index = 0;
        currentMove = sequence[0];
        break;
      default:
        flag = false;
    }
    if(flag) currentMove.start();
  }
  
}

let allMoves;