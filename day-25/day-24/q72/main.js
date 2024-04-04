"use strict";
{
    let x = 10;
    const y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
}
// Outside the block
console.log(x); // Error: cannot find name 'x'.
console.log(y); // Error: cannot find name 'y'.
