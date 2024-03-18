import { describe } from "node:test";

let laptop = {
    make: "HP",
    model: "Inspiron 15",
    year:   2022,
    describe: function() {
      console.log(`This laptop is a ${this.year} ${this.make} ${this.model} `);
    },
};

laptop.describe();