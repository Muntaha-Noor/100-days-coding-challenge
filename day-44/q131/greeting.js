"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeting = void 0;
class Greeting {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
}
exports.Greeting = Greeting;
