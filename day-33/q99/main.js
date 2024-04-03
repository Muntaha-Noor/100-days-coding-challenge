"use strict";
function getNextBirthDay() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const myBirthday = new Date(currentYear, 3, 27);
    if (myBirthday < currentDate) {
        myBirthday.setFullYear(currentYear + 1);
    }
    return myBirthday;
}
const nextBirthDay = getNextBirthDay();
console.log(`My next bithday is on ${nextBirthDay.toLocaleDateString()}`);
