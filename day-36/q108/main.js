"use strict";
function areStringsEqualIgnoreCase(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}
console.log(areStringsEqualIgnoreCase("apple", "APPLE")); // Output: true
console.log(areStringsEqualIgnoreCase("banana", "Bnana")); // Output: false
