"use strict";
function grade(score) {
    if (score >= 90 && score <= 100) {
        return "grade A";
    }
    else if (score >= 80 && score <= 89) {
        return "grade B";
    }
    else if (score >= 70 && score <= 79) {
        return "grade C";
    }
    else if (score >= 60 && score <= 69) {
        return "grade D";
    }
    else {
        return "Failed";
    }
}
console.log(grade(94)); // Output: grade A
console.log(grade(87)); // Output: grade B
console.log(grade(57)); // Failed
