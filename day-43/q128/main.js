const multiParameters = (...numbers) => {
    return numbers.reduce((acc, curr) => acc * curr, 1);
};
console.log(multiParameters(2, 5, 6)); // Output: 60
export {};
