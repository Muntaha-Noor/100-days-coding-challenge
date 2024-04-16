"use strict";
try {
    // Intentionally causing an error
    throw new Error("This is a custom error message.");
}
catch (error) {
    console.log("Error occured:", error.message);
}
