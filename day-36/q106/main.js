"use strict";
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(1999)); // Output: false
console.log(isLeapYear(2025)); // Output: false
