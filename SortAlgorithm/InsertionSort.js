async function insertionSort(arr){
  
  let count = 0;
  for(let i = 1 ; i < arr.length ; i++){
    
    for(let j = i ; j > 0 ; j--){
      if(arr[j] > arr[j-1]){
        if(count > 30){
          await swap(arr, j, j-1);
          count = 0;
        } else {
          swapWithoutTimer(arr, j, j-1);
          count++;
        }
      }
    }
  }
}