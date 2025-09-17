function isPalindrome(text){
    text = text.toLowerCase().replace(/[^a-z0-9]/g, "");
     let rev = text.split('').reverse().join('');
     return text === rev;
}


console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("Eva, I see bees in a cave")); // false