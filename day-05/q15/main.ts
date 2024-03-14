// Q14 Answer:
let  guests: string[] = ["Warda", "Musfirah", "Nazia"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
})

// Q15 Answer:
let absentGuest = "Warda";
console.log(`${absentGuest} can't make it to dinner.`);

// Replace the Guest
let newGuest = "Kulsoom";
guests[guests.indexOf(absentGuest)] = newGuest;

// New invitations 
guests.forEach(guest => {
    console.log(`Dear ${guests}, would you like to join me for dinner?`);
});

export {}