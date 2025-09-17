// function isAnagram(a,b){
//   a = a.toLowerCase().replace(/\s+/g, "");
//   b = b.toLowerCase().replace(/\s+/g, "");


// if(a.length !== b.length){
//     return false
// }
//  return a.split("").sort().join("") === b.split("").sort().join("");

// }
// console.log(isAnagram("finder", "Friend")); // true
// console.log(isAnagram("hello", "bye")); // false
// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("rail safety", "fairy tales"));

function isAnagram(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a.length !== b.length) {
    return false;
  }

  let count = {}; // об’єкт для підрахунку букв

  // Рахуємо кількість букв у першому слові
  for (let i = 0; i < a.length; i++) {
    let char = a[i];
    count[char] = (count[char] || 0) + 1;
  }

  // Віднімаємо кількість букв у другому слові
  for (let i = 0; i < b.length; i++) {
    let char = b[i];
    if (!count[char]) {
      return false; // якщо букви немає або забагато разів
    }
    count[char]--;
  }

  return true; // якщо все зійшлося
}

console.log(isAnagram("finder", "Friend")); // true
console.log(isAnagram("hello", "bye")); // false
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rail safety", "fairy tales"));