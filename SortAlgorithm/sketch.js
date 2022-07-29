
let numberOfBars = 500;
let proportion = 1.0*600/numberOfBars;

let numbers;

function setup() {
  
  createCanvas(600, 300);
  
  numbers = new Array(numberOfBars);
  
  scrambleArray();

}

function draw() {
  background(0);
  
  fill(255);
  noStroke();
  
  if(isSorted(numbers)){
    document.getElementById('scrambleButton').disabled = false;
    document.getElementById('sortButton').disabled = false;
    document.getElementById('rangeNumberBars').disabled = false;
  }
  
  colorMode(HSB, 100);
  for(let k = 0 ; k < numberOfBars ; k++){
    fill(map(numbers[k],0,height,0,100),100,100);
    rect(k*width/numberOfBars, numbers[k], proportion, height);
  }
}

function isSorted(arr){
  
  for(let i = 0 ; i < arr.length-1 ; i++){
    if(arr[i] < arr[i+1]){
      return false;
    }
  }
  return true;
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function swap(arr, a, b){
  await sleep(speedSleep);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

async function swapBetweenArrays(arr1, arr2, a1, a2){
  await sleep(speedSleep);
  let temp = arr1[a1]
  arr1[a1] = arr2[a2];
  arr2[a2] = temp;
}



