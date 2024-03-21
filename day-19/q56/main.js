"use strict";
const mixedItems = [1, "apple", true, "banana", 3.14, "orange"];
const keepOnlyStrings = mixedItems.filter((item) => typeof item === "string");
console.log(keepOnlyStrings);
