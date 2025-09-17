function findPairs(array, num){
let sum = [];

for (let i = 0; i < array.length; i++){
      for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === num) {
        sum[sum.length] = [array[i], array[j]]; // додаємо елемент без push
      }
    }
}
return sum;

}

//Напишите функцию, которая возвращает все пары чисел из массива, сумма которых равна заданной целевой сумме.
console.log(findPairs([2, 4, 3, 7, 8, 1], 9)); // [[7, 2], [8, 1]]
console.log(findPairs([1, 2, 3, 4, 5], 10)); // []
console.log(findPairs([0, -1, -2, 2, 1], 0)); // [[-1, 1], [-2, 2]]