"use strict";
const delayedPromise = new Promise((resolve, reject) => {
    const randomeNumber = Math.random();
    if (randomeNumber < 0.5) {
        resolve(randomeNumber);
    }
    else {
        reject("Error: Random number is greater than or equal to 0.5");
    }
});
delayedPromise
    .then((result) => {
    console.log("Resolved:", result);
})
    .catch((error) => {
    console.error("Rejected:", error);
});
