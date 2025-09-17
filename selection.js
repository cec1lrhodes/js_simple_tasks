const array = [0,3,5,6,1,2,3,9,6,7,8, -1, -5, 23, 7, 35, 32];
let count = 0;

function selectionSort(arr) {
       for(let i = 0; i < arr.length; i++){
        let indexMin = i
           for(let j = i+1; j < arr.length; j++){
               if(arr[j] < arr[indexMin]){
                indexMin = j
               }
               count +=1
           }
        let tmp = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = tmp; 
}
return arr

}



console.log(selectionSort(array))
console.log(array.length)
console.log(count)