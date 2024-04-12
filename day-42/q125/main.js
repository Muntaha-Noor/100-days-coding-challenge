const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    description() {
        return `This ${this.brand} ${this.model} was manufactured in ${this.year}.`;
    },
};
console.log(car.description()); // Output: This Toyota Corolla was manufactured in 2022.
export {};
