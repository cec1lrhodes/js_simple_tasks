function countVowels(str){
    let result = str.match(/[aeiou]/gi);
    return result ? result.length : 0;
}

// Напишите функцию, которая принимает строку в качестве аргумента и возвращает количество гласных,
//  содержащихся в этой строке. Гласными являются «a», «e», «i», «o», «u».
console.log(countVowels("hello")); // 2
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("xyz")); // 0