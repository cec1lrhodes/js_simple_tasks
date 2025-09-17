function reverseNum(number){
    return Number(String(number).split('').reverse().join(""));

}
console.log(reverseNum(125))

// для - чисел
// function reverseNum(number) {
//   const isNegative = number < 0; 
//   const reversed = Number(String(Math.abs(number)) 
//     .split('')   // ["1","2","5"]
//     .reverse()   // ["5","2","1"]
//     .join(''));  // "521"
  
//   return isNegative ? -reversed : reversed; 
// }
