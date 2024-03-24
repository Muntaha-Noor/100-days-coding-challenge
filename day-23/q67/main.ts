function addNumberAndString(num1: number, strNum: string): number {
    const num2: number = parseFloat(strNum);
    return num1 + num2;
}

const result: number =  addNumberAndString(5, "10");
console.log(result);