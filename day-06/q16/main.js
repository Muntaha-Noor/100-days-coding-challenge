"use strict";
let guests = ["Warda", "Musfirah", "Nazia"];
console.log("Great news! I found a bigger dinner table!");
// adding more guests
guests.unshift("Muntaha");
guests.splice(guests.length / 2, 0, "Noor");
guests.push("Anus");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner? `);
});
