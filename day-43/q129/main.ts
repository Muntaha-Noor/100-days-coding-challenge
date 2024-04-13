const person = {
    fullName: "Alice Johnson",
    introduceTraditional: function() {
        console.log("My name is ", this.fullName);
    },
    introduceArrow: () => {
        console.log("My name is ", this.fullName);
    },
};

person.introduceTraditional(); // Output: My name is Alice Johnson

person.introduceArrow(); // Output: My name is undefined (outer scop's full name)