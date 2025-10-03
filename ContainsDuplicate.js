function repeat(arr) {
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let secondChar = arr[j];

      if (char === secondChar) {
        return true;
      }
    }
  }
  return false;
}

console.log(repeat([1, 2, 3, 4])); // false
console.log(repeat([1, 2, 3, 4, 2])); // true
