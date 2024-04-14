const person = {
    fullName: "Alice Johnson",
    introduceTraditional: function () {
        console.log("My name is ", this.fullName);
    },
    introduceArrow: () => {
        console.log("My name is ", this.fullName);
    },
};
person.introduceTraditional();
person.introduceArrow();
export {};
