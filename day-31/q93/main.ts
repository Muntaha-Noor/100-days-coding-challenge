function replaceFruit(fruits: string[]): void {
  const index = fruits.indexOf("Banana");
  if (index !== -1) fruits[index] = "Mango";
}

const fruits: string[] = ["Apple", "Banana", "Strawberry"];
replaceFruit(fruits);
console.log(fruits);
