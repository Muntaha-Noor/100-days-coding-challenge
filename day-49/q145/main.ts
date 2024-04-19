function performAction(
  callback: (a: number, b: number) => void,
  arg1: number,
  arg2: number
): void {
  callback(arg1, arg2);
}

function add(a: number, b: number) {
  console.log(a + b);
}

performAction(add, 4, 6);
// Output: 10
