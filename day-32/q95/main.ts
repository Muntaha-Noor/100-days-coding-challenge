function numbersGreaterThanTen(arr: number[]): number[] {
  return arr.filter((num) => num > 10);
}

let numbers: number[] = [5, 12, 3, 15, 8, 20];

console.log(numbersGreaterThanTen(numbers));
