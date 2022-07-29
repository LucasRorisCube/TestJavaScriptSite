async function quickSort(arr, start, end){
  
  if(start >= end){
    return;
  }
  
  let index = await partion(arr, start, end);
  
  //await Promise.all([quickSort(arr, start, index-1),quickSort(arr, index+1, end)])
  await quickSort(arr, start, index-1);
  await quickSort(arr, index+1, end);
}

async function partion(arr, start, end){
  
  let index = start;
  let pivotValue = arr[end];
  
  for(let i = start ; i < end ; i++){
    
    if(arr[i] > pivotValue){
      await swap(arr, i, index);
      index++;
    }
  }
  await swap(arr, index, end);
  return index;
}