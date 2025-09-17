function countVowelsAndConsonants(text){
    let count = {};
    const vowels = ["a", "e", "i", "o", "u"]
    const consonants = [
     "b","c","d","f","g","h","j","k","l","m","n",
     "p","q","r","s","t","v","w","x","y","z"
 ];
    
    let vowelsCount = 0;
    let consonantsCount = 0;

    for (let i = 0; i < text.length; i++){
    let char = text[i].toLowerCase();
    
        if (vowels.includes(char)) {
            vowelsCount++;
     }else if (consonants.includes(char)) {
            consonantsCount++;

    
    }
    }
 return { vowels: vowelsCount, consonants: consonantsCount };
}


console.log(countVowelsAndConsonants("helloooooooo")); // { vowels: 9, consonants: 3 }
console.log(countVowelsAndConsonants("JavaScript")); // { vowels: 3, consonants: 7 }
console.log(countVowelsAndConsonants("12345")); // { vowels: 0, consonants: 0 }