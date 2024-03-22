type Circle = {
    kind: "circle";
    radius: number;
}

type Rectangle = {
    kind: 'rectangle';
    width: number;
    height: number;
}

function describeShape(shape: Circle | Rectangle) {
    if(shape.kind === "circle"){
    return `This is a circle with radius ${shape.radius}.`;
}else {
    return  `This is a rectangle with width ${shape.width} and height ${shape.height}.`;
}
 };
   
 const circle: Circle = { kind: "circle", radius: 5 };
 const rectangle: Rectangle = {kind:"rectangle", width: 4, height: 6};

 console.log(describeShape(circle));
 console.log(describeShape(rectangle));