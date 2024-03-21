let userProfile = (function ()  {
    let name: string = "Alice";
    let age: number = 25;

    return {
        displayInfo: function () {
            console.log(`Name: ${name} Age: ${age}`);
        },
    };
}) ();

userProfile.displayInfo();