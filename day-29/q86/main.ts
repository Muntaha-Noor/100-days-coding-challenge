function hasJavascript(input: string): boolean {
    return input.includes("Javascript");
}

const isPresent = hasJavascript( "I love Javascript");
console.log("Is 'Javascript' present?", isPresent);