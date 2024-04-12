const person = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`); // Output: Hello, John Doe!

    const introduce = () => {
      console.log(`My name is ${this.firstName} ${this.lastName}.`); // Output: My name is John Doe.
    };
    introduce();
  },
};

person.greet();
