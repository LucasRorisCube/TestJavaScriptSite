
let numberOfBars = 500;
let proportion = 1.0*600/numberOfBars;

let numbers;

function setup() {
  
  createCanvas(600, 300);
  
  numbers = new Array(numberOfBars);
  
  for(let i = 0 ; i < numberOfBars ; i++){
    numbers[i] = random()*height;
  }
  
  quickSort(numbers, 0, numbers.length-1);

}

function scrambleArray(){
  for(let i = 0 ; i < numberOfBars ; i++){
    numbers[i] = random()*height;
  }
  
  quickSort(numbers, 0, numbers.length-1);
}

function mousePressed(){
  if(isSorted(numbers)){
    scrambleArray();
  }
}

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

async function swap(arr, a, b){
  await sleep(1);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function draw() {
  background(0);
  
  fill(255);
  noStroke();
  
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