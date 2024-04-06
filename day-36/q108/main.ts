function areStringsEqualIgnoreCase(str1: string, str2: string): boolean {
  return str1.toUpperCase() === str2.toUpperCase();
}

console.log(areStringsEqualIgnoreCase("apple", "APPLE")); // Output: true
console.log(areStringsEqualIgnoreCase("banana", "Bnana")); // Output: false
