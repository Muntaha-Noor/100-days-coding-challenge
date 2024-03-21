"use strict";
let userProfile = (function () {
    let name = "Alice";
    let age = 25;
    return {
        displayInfo: function () {
            console.log(`Name: ${name} Age: ${age}`);
        },
    };
})();
userProfile.displayInfo();
