"use strict";
function calculateSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
const number = [1, 2, 3, 4, 5];
const sum = calculateSum(number);
console.log("The sum of all numbers is:", sum);
