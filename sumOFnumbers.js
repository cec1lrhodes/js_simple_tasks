// function sumRange(a,b){
// return (a + b) * (b - a + 1)/2;
// }


function sumRange(a, b) {
  let sum = 0; 
  for (let i = a; i <= b; i++) {
    sum += i; 
}
  return sum;
}
console.log(sumRange(1, 5)); // 15


console.log(sumRange(1, 5)); // 15
console.log(sumRange(0, 10)); // 55
console.log(sumRange(-3, 3)); // 0