// function stringLength(str){
//     for(let i = 0; i < str.length; i++){
//         ch = str[i];
//         console.log(ch)
        
     
//     }
//     console.log(str.length)
// }

function stringLength(str) {
    if (str === "") return 0;
    return 1 + stringLength(str.slice(1));
}
// stringLength("hello")
// = 1 + stringLength("ello")
// = 1 + (1 + stringLength("llo"))
// = 1 + (1 + (1 + stringLength("lo")))
// = 1 + (1 + (1 + (1 + stringLength("o"))))
// = 1 + (1 + (1 + (1 + (1 + stringLength("")))))
// = 1 + 1 + 1 + 1 + 1 + 0
// = 5


console.log(stringLength("hello")); // 5
console.log(stringLength("JavaScript")); // 10
console.log(stringLength("")); // 0