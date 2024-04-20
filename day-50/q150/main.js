"use strict";
// Synchronous example
console.log("Before synchronous operation");
for (let i = 0; i < 5; i++) {
    console.log("Synchronous operation in progress...");
}
console.log("After synchronous operation");
// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 2000);
console.log("Setting up asynchronous operation...");
