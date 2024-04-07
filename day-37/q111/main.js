"use strict";
function categorizeAge(age) {
    if (age < 13) {
        return "Child";
    }
    else if (age > 13 && age <= 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(categorizeAge(10)); // Output: Child
console.log(categorizeAge(17)); // Output: Teenager
console.log(categorizeAge(22)); // Output: Adult
