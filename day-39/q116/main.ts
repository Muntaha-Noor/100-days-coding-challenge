function catagorizeFruit(fruit: string): void {
  switch (fruit) {
    case "apple":
    case "pear":
    case "banana":
      console.log("This is a common fruit.");
      break;

    case "orange":
    case "grapefruit":
      console.log("This is a citrus fruit");
      break;

    case "strawberry":
    case "blueberry":
      console.log("This is a berry fruit.");
      break;

    case "pineapple":
    case "mango":
    case "kiwi":
      console.log("This is a tropical fruit");
      break;

    default:
      console.log("Unknown fruit.");
      break;
  }
}

catagorizeFruit("strawberry"); // This is a berry fruit.
catagorizeFruit("mango");      // This is a tropical fruit.
catagorizeFruit("cherry");     // Unknown fruit.
