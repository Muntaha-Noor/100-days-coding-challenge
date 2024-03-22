"use strict";
function describeShape(shape) {
    if (shape.kind === "circle") {
        return `This is a circle with radius ${shape.radius}.`;
    }
    else {
        return `This is a rectangle with width ${shape.width} and height ${shape.height}.`;
    }
}
;
const circle = { kind: "circle", radius: 5 };
const rectangle = { kind: "rectangle", width: 4, height: 6 };
console.log(describeShape(circle));
console.log(describeShape(rectangle));
