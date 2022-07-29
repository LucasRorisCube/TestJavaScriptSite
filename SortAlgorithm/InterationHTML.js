function sortNumbers(){
  
  if(isSorted(numbers)){
    return;
  }
  
  let value = document.getElementById('sortAlgorithm').value;
  
  document.getElementById('scrambleButton').disabled = true;
  document.getElementById('sortButton').disabled = true;
  document.getElementById('rangeNumberBars').disabled = true;
  
  if(value == "BubbleSort"){
    bubbleSort(numbers);
  } else if(value == "QuickSort"){
    quickSort(numbers, 0 , numbers.length - 1);
  } else if(value == "SelectionSortSimple"){
    selectionSortSimple(numbers);
  } else if(value == "SelectionSortDouble"){
    selectionSortDouble(numbers);
  } else if(value == "InsertionSort"){
    insertionSort(numbers);
  } else if(value == "MergeSort"){
    mergeSort(numbers, 0, numbers.length - 1);
  } else if(value == "HeapSort"){
    heapSort(numbers);
  } else if(value == "RadixSort"){
    radixSort(numbers, numbers.length);
  } else if(value == "ShellSort"){
    shellSort(numbers);
  }
}

let speedSleep = 10;

function setSpeed(){
  speedSleep = document.getElementById('rangeSpeed').valueAsNumber;
}

function setNumberBars(){
  numberOfBars = document.getElementById('rangeNumberBars').valueAsNumber;
  
  numbers = new Array(numberOfBars);
  
  scrambleArray();
  
  proportion = 1.0*600/numberOfBars;
}

function scrambleArray(){
  
  for(let i = 0 ; i < numberOfBars ; i++){
    numbers[i] = int(random()*height);
  }
  
}