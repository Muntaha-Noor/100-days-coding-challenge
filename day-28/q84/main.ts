function replaceJavaScriptWithTypeScript(sentence: string): string {
  const modifiedSentence = sentence.replace(/JavaScript/g, "TypeScript");
  return modifiedSentence;
}

const originalSentence =
  "JavaScript is a powerful programming language. I Love JavaScript!";

console.log(replaceJavaScriptWithTypeScript(originalSentence));
