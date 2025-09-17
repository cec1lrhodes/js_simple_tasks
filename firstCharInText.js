function firstNonRepeatingChar(text){

    let count = {};

for(let i = 0; i < text.length; i++){
let char = text[i];
count[char] = (count[char] || 0) +1;
}
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (count[char] === 1) {
      return char;
    }

}

}
console.log(firstNonRepeatingChar("swiss")); // "w"
console.log(firstNonRepeatingChar("aabbcc")); // null
console.log(firstNonRepeatingChar("javascript")); // "j"