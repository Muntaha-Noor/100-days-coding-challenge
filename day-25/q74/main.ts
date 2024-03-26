let a: number = 5;
let b: number = 10;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

// swapping logic using a temporary variable
let temp: number = a;
a = b;
b = temp;

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);