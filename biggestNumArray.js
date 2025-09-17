const numbers = [1,2,3,4,5,6,7,8,9,25];


function countBigNum(array){
let maxNum = array[0];

for(let i = 0; i < array.length; i++){
    if(array[i] > maxNum){
        maxNum = array[i];
    }
}
return maxNum

}

console.log(countBigNum(numbers))