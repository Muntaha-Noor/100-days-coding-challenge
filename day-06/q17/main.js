"use strict";
// Q16 Answer
let guests = ["Warda", "Musfirah", "Nazia"];
console.log("Great news! I found a bigger dinner table!");
// adding more guests
guests.unshift("Muntaha");
guests.splice(guests.length / 2, 0, "Noor");
guests.push("Anus");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner? `);
});
// Q17 Answer:
console.log("Unfortunately, I can only invite two peopel for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invite to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);
