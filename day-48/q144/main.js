"use strict";
const promise1 = Promise.resolve(5);
const promise2 = 100;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 200, "bar");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log("Resolved values:", values);
    // Outputs: [5, 100, "bar"]
});
