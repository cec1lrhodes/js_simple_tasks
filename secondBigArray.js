function secondMax(array) {
  if(array.length < 2) return null; 

  let max = -Infinity;       
  let second = -Infinity;    

  for(let i = 0; i < array.length; i++) {
    if(array[i] > max) {
      second = max;  
      max = array[i]; 
    } else if(array[i] > second && array[i] !== max) {
      second = array[i]; 
    }
  }

  return second;
}

console.log(secondMax([4, 3, 5, 3, 2])); // 4
console.log(secondMax([10, 10, 9]));     // 9



