async function mergeSort(arr, start, end){

  if(start < end){
    
    let middle = int((start+end)/2)
    await mergeSort(arr, start, middle);
    await mergeSort(arr, middle+1, end);
    await merge(arr, start, middle, end);
  }
}
  
async function merge(arr, start, middle, end){
  let auxiliarArray = new Array(int(end-start+1));
  
  let count1 = start;
  let count2 = middle+1;
  let count3 = 0;
  
  while(count1 <= middle && count2 <= end){
    
    if(arr[count1] > arr[count2]){
      auxiliarArray[count3] = arr[count1];
      count1++;
    } else{
      auxiliarArray[count3] = arr[count2];
      count2++;
    }
    count3++;
  }
  
  while(count1 <= middle){
    
    auxiliarArray[count3] = arr[count1];
    count1++;
    count3++;
  }
  
  while(count2 <= end){

    auxiliarArray[count3] = arr[count2];
    count2++;
    count3++;
  }
  
  for(count3 = start ; count3 <= end ; count3++){
    //await sleep(speedSleep);
    await swapBetweenArrays(arr, auxiliarArray, count3, count3-start);
    //arr[count3] = auxiliarArray[count3-start];
    
  }
}
