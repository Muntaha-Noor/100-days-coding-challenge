function findFirstVowel(str: string): string {
  const vowels = ["a", "e", "i", "o", "u"];
  for (const char of str) {
    if (vowels.includes(char)) {
      return char;
    }
  }
  return "No vowels found";
}

console.log(findFirstVowel("Hello"));
