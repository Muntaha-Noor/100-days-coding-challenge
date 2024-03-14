// equality with strings
console.log("Testing equality with strig:");
console.log("cherry" == "cherry");
console.log("cherry" == "Cherry");

// using the lower case function
console.log("Testing with lower case:");
console.log("Cherry".toLowerCase() == "cherry");

// Numerical tests
console.log("Numerical tests");
console.log(5 > 2);
console.log(3 < 2);

// Testing using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false);
console.log(true || false);

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple"));

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango"));