"use strict";
let magicians = ["Luna", "Mirage", "Merlin"];
;
function show_magicians(magicians) {
    // magicians.forEach((magician) => {
    //     console.log(magician)
    // }) 
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicians);
