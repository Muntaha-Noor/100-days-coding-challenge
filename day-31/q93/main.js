"use strict";
function replaceFruit(fruits) {
    const index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
const fruits = ["Apple", "Banana", "Strawberry"];
replaceFruit(fruits);
console.log(fruits);
