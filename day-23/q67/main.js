"use strict";
function addNumberAndString(num1, strNum) {
    const num2 = parseFloat(strNum);
    return num1 + num2;
}
const result = addNumberAndString(5, "10");
console.log(result);
