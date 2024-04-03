"use strict";
function dayUntilNewYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const newYearDate = new Date(currentYear + 1, 0, 1);
    const differenceInMilliseconds = newYearDate.getTime() - currentDate.getTime();
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil(differenceInMilliseconds / millisecondsInADay);
    return daysLeft;
}
const daysLeft = dayUntilNewYear();
console.log(`There are ${daysLeft} days left until New Year.`);
