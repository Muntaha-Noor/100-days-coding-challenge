"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// JSON string
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// Parse JSON string into a JavaScript object
const person = JSON.parse(jsonString);
console.log(person);
