// function fibonacci(n) {
//   if (n <= 0) return [];       // якщо 0 або менше — порожній масив
//   if (n === 1) return [0];     // тільки перше число
//   if (n === 2) return [0, 1];  // перші два числа

//   const seq = fibonacci(n - 1); // рекурсивно отримуємо послідовність до n-1
//   seq.push(seq[seq.length - 1] + seq[seq.length - 2]); // додаємо n-те число
//   return seq;
// }

// console.log(fibonacci(10)); 
// // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// console.log(fibonacci(0)); // 0
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1

const fibonacci = (n) => {
    if (n === 0) {
        return 0
    }

    if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5