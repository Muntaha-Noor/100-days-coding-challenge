"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    make: "HP",
    model: "Inspiron 15",
    year: 2022,
    describe: function () {
        console.log(`This laptop is ${this.year} ${this.make} ${this.model} `);
    },
};
laptop.describe();
