"use strict";
function calculateAverage(...scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(calculateAverage(80, 95, 67, 86));
