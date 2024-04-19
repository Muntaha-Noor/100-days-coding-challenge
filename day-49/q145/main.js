"use strict";
function performAction(callback, arg1, arg2) {
    callback(arg1, arg2);
}
function add(a, b) {
    console.log(a + b);
}
performAction(add, 4, 6);
// Output: 10
