"use strict";
function removeLastElement(arr) {
    return arr.pop();
}
let fruit = ["apple", "banana", "orange"];
let removedFruit = removeLastElement(fruit);
console.log("Removed fruit:", removedFruit);
console.log("Updated array:", fruit);
