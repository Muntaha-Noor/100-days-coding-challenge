"use strict";
function multiplyingDecimal(num1, num2) {
    const product = num1 * num2;
    return Math.round(product * 100) / 100;
}
console.log(multiplyingDecimal(3.14, 2.5)); // 7.85
