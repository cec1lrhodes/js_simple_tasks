function moveZeros(arr) {
  for (let i=0; i < arr.length; i++){
   let indexMin = i;
    for (let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[indexMin]){
        indexMin = j;
        
      }
    }
    let tmp = arr[i];
    arr[i] = arr[indexMin]
    arr[indexMin] = tmp
  }
    return arr 
}


const i1 = [1,2,0,1,0,1,0,3,0,1]
console.log(moveZeros(i1))