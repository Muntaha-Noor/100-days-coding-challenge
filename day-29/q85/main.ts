function findCodePosition(input: string): number {
    return input.indexOf("code");
}

const position = findCodePosition("This is a code example");
console.log("Position of 'code':", position);