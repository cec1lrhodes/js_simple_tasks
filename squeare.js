function isPerfectSquare(number){
 for(i = 0; i*i <= number; i++){
if(i*i === number){
    return true
}
}
return false
}
console.log(isPerfectSquare(25)); // true
console.log(isPerfectSquare(14)); // false
console.log(isPerfectSquare(0)); // true
console.log(isPerfectSquare(25)); // true




