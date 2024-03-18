"use strict";
function Hobbies(...hobbies) {
    for (let hobby of hobbies) {
        console.log(`I enjoy ${hobby}.`);
    }
}
Hobbies("reading", "coding", "playing");
