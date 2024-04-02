"use strict";
function numbersGreaterThanTen(arr) {
    return arr.filter(num => num > 10);
}
let numbers = [5, 12, 3, 15, 8, 20];
console.log(numbersGreaterThanTen(numbers));
