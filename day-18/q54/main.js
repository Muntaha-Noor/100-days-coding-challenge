"use strict";
function myFlaxibleObject(key, value) {
    let flaxibleObject = {};
    flaxibleObject = [key, value];
    return flaxibleObject;
}
let result = myFlaxibleObject("2024", "spring");
console.log(result);
