async function selectionSortSimple(arr){
  
  for(let i = 0 ; i < arr.length ; i++){
    
    let min = arr[i];
    let indexMin = i;
    for(let j = i+1 ; j < arr.length ; j++){
      if(arr[j] > min){
        min = arr[j];
        indexMin = j;
      }
    }
    if(i != indexMin){
      await swap(arr, i, indexMin);
    }
  }
}

async function selectionSortDouble(arr){
  
  for(let i = 0 ; i < arr.length/2 ; i++){
    let min = arr[i];
    let indexMin = i;
    let max = arr[arr.length-1-i];
    let indexMax = arr.length-1-i;
    
    for(let j = i ; j <= arr.length-i-1 ; j++){
      if(arr[j] < min){
        min = arr[j];
        indexMin = j;
      }
      if(arr[j] > max){
        max = arr[j];
        indexMax = j;
      }
    }
    
    if(i == indexMax && arr.length-1-i == indexMin){
      continue;
    }
    
    if(i != indexMax){
      await swap(arr, i, indexMax);
    }
    if(indexMin == i){
      await swap(arr, arr.length-1-i, indexMax);
    } else {
      await swap(arr, arr.length-1-i, indexMin);
    }
    
    
  }
}