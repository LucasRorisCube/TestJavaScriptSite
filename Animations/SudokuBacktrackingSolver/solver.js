async function trySolve(){
    if(!isBoardValid()){
      print("Invalid Board");
      return;
    }
    if(await solver(0, 0)){
      print("Solved");
      state = "Solved";

      for(let i = 0 ; i < 9 ; i+=1){
        for(let j = 0 ; j < 9 ; j+=1){
          if(!table[i][j].fixed){
            table[i][j].colour = color(100, 255, 0);
          }
        }
      }
    } else {
      print("impossible to solve");

      for(let i = 0 ; i < 9 ; i+=1){
        for(let j = 0 ; j < 9 ; j+=1){
          table[i][j].colour = color(255, 0, 0);
        }
      }

      state = "UnSolved";
    }
    
    
    
  
  }
  
  let speedSleep = 0.1;
  
  function isBoardValid(){
  
    for(let i = 0 ; i < 9 ; i+=1){
      for(let j = 0 ; j < 9 ; j+=1){
        if(!lineIsCorrect(i, j) || !columnIsCorrect(i, j) || !squareIsCorrect(i, j)){
          return false;
        }
      }
    }
    return true;
  }
  
  async function solver(row, col){
    if(row == 9){
      return true;
    }
    if(table[row][col].number != 0){
  
      return (col == 8) ? await solver(row+1, 0) : await solver(row, col+1);
    } else {
      table[row][col].colour = color(255, 0, 0);
      for(let i = 1 ; i < 10 ; i++){
        table[row][col].number = i;
        
        if(random(0,1) > slider.value()) await sleep(1);
        
        if(lineIsCorrect(row, col) && columnIsCorrect(row, col) && squareIsCorrect(row, col)){
          table[row][col].colour = color(255, 255, 0);
          if((col == 8) ? await solver(row+1, 0) : await solver(row, col+1)){
            return true;
          }
        }
      }
    }
    
    table[row][col].number = 0;
    return false;
  }
  
  function lineIsCorrect(row, col){
    for(let i = 0 ; i < 9 ; i+=1){
      if(table[row][i].number != 0 && i != col && table[row][i].number == table[row][col].number){
  
        return false;
      }
    }
    return true;
  }
  
  function columnIsCorrect(row, col){
    for(let i = 0 ; i < 9 ; i+=1){
      if(table[i][col].number != 0 && i != row && table[i][col].number == table[row][col].number){
        return false;
      }
    }
    return true;
  }
  
  function squareIsCorrect(row, col){
    
    let init_line = 3*int(row/3);
    let init_col = 3*int(col/3);
    
    for(let i = 0 ; i < 3 ; i+=1){
      for(let j = 0 ; j < 3 ; j+=1){
        if(init_line+i != row && init_col+j != col){
          if(table[init_line+i][init_col+j].number != 0 && table[init_line+i][init_col+j].number == table[row][col].number){
            return false;
          }
        }
        
      }
    }
    return true;
    
  }
  
  function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
  }