"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = currentDate.getMonth().toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
}
console.log(getCurrentDate());
