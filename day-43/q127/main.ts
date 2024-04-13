function add(a: number, b: number): number {
  return a + b;
}

const addArrow = (a: number, b: number): number => {
  return a + b;
};

console.log(add(2, 9));      // Output: 11
console.log(addArrow(8, 4)); // Output: 12
