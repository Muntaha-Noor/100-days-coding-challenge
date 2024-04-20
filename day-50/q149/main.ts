console.log("Start fetching data...");

// Simulating a network request with setTimeout
setTimeout(() => {
    console.log("Data fetched successfully!");
}, 3000); // This gets queued to be executed by the event loop

console.log("Fetching data...");

console.log("End of script");
