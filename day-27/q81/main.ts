function logObjectProperties(obj : object) {
    for (let key in obj){

        console.log(`${key}: ${obj[key]}`);
    }
};

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    color: 'silver'
}

logObjectProperties(car);

export {}