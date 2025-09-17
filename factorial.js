function factorial(n) {
  if (n < 0) return null; х
  if (n === 0 || n === 1) return 1; 
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6