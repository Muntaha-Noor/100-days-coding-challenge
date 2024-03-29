function convertCase(str:string){
    const upperCaseStr = str.toUpperCase(); // convert to uppercase
    const lowerCaseStr = str.toLowerCase(); // convert to lowercase

    console.log(`uppercase: ${upperCaseStr}, lowercase: ${lowerCaseStr}.`);
};

convertCase("Hello world");
// Output: uppercase: HELLO WORLD, lowercase: hello world.