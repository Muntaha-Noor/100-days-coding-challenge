function removeLastElement<T>(arr: T[]): T | undefined {
  return arr.pop();
}

let fruit: string[] = ["apple", "banana", "orange"];
let removedFruit: string | undefined = removeLastElement(fruit);

console.log("Removed fruit:", removedFruit);

console.log("Updated array:", fruit);
