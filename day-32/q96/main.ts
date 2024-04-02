function calculateSum(numbers: number[]): number {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

const numbers: number[] = [1, 2, 3, 4, 5];

const sum: number = calculateSum(numbers);
console.log("The sum of all numbers is:", sum);

export {};
