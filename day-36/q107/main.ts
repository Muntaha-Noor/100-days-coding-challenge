function isDivisibleBy2And3(number: number): boolean {
  return number % 2 === 0 && number % 3 === 0;
}

console.log(isDivisibleBy2And3(18)); // Output: true
console.log(isDivisibleBy2And3(16)); // Output: false
console.log(isDivisibleBy2And3(21)); // Output: false