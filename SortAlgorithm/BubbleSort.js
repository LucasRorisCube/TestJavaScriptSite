async function bubbleSort(arr){
  
  let count = 0;
  
  for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr.length - i ; j++){
      if(arr[j] < arr[j+1]){
        if(count >= 50){
          await swap(arr, j, j+1);
          count = 0;
        } else {
          swapWithoutTimer(arr, j, j+1);
          count++;
        }
      }
    }
  }
}

function swapWithoutTimer(arr, a, b){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}