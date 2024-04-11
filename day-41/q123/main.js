"use strict";
function findFirstVowel(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    for (const char of str) {
        if (vowels.includes(char)) {
            return char;
        }
        console.log(char);
    }
    return "No vowels found";
}
console.log(findFirstVowel("Hello"));
