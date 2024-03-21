"use strict";
const grades = [85, 90, 75, 88, 92];
const sum = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(sum);
