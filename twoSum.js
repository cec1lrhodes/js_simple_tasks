function twoSum(numbers, target) {
  let res = [];
  for (let i = 0; i < numbers.length; i++) {
    let firstLoop = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      let secondLoop = numbers[j];

      if (firstLoop + secondLoop === target) {
        res.push(firstLoop, secondLoop);
      }
    }
  }
  return res;
}

console.log(twoSum([1, 2, 3, 4], 3));
