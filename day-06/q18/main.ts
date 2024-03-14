let places: string[] = ["London", "Iceland", "Singapore", "Turkey", "Qatar"];

console.log("Original order", places)

console.log("Alphabetical Order:", [...places].sort());

console.log("Original order", places)

console.log("Reverse alphabetical order", [...places].sort().reverse());

console.log("Original order: ", places);

places.reverse();
console.log("Reverse order", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order", places);

places.reverse();
console.log("Reverse alphabetical order", places);