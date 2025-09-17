function findMinMax(array) {

  let min = array[0]; 
  let max = array[0];

  for(let i = 1; i < array.length; i++) { // бо 0 уже є, щоб не робити повторне порівняння 0 < 0; 0 > 0
    if(array[i] < min) min = array[i];  
    if(array[i] > max) max = array[i];  
  }

  return { min: min, max: max };
}

console.log(findMinMax([4, 3, 5, 3, 2])); // {min: 2, max: 5}
console.log(findMinMax([4, 4, 7, 2, 1, 10])); // {min: 1, max: 10}
console.log(findMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // {min: 1, max: 10}