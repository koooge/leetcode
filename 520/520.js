const detectCapitalUse = word => /^([A-Z]+|[a-zA-Z][a-z]*)$/.test(word);

console.log(detectCapitalUse('USA')); // true
console.log(detectCapitalUse('FlaG')); // false
console.log(detectCapitalUse('g')); // true
console.log(detectCapitalUse('Leetcode')); // true
