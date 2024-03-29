"use strict";
function replaceJavaScriptWithTypeScript(sentence) {
    const modifiedSentence = sentence.replace(/JavaScript/g, "TypeScript");
    return modifiedSentence;
}
const originalSentence = "JavaScript is a powerful programming language. I Love JavaScript!";
console.log(replaceJavaScriptWithTypeScript(originalSentence));
