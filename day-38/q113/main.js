"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countryMap = new Map();
countryMap.set("Pakistan", "Islamabad");
countryMap.set("Canada", "Ottawa");
countryMap.set("Japan", "Tokyo");
console.log(countryMap);
function checksCapitalInMap(countryMap) {
    if (countryMap.has("Canada")) {
        console.log(`The capital of Canada is ${countryMap.get("Canada")}.`);
    }
    else {
        console.log(`Canada is not in the map.`);
    }
}
checksCapitalInMap(countryMap);
