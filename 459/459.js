const repeatedSubstringPattern = s => {
  for (let i = 2; i <= s.length; ++i) {
    if (s.length % i !== 0) continue;

    let isRepeated = true;
    for (let j = 0; j < i - 1; ++j) {
      const len = s.length / i;
      const acc = s.slice(j * len, (j * len) + len);
      const cur = s.slice((j + 1) * len, ((j + 1) * len) + len);

      if (acc !== cur) {
        isRepeated = false;
        break;
      }
    }
    if (isRepeated) return true;
  }

  return false;
};

console.log(repeatedSubstringPattern('abab')); // true
console.log(repeatedSubstringPattern('aba')); // false
console.log(repeatedSubstringPattern('abcabcabcabc')); // true
console.log(repeatedSubstringPattern('abac')); // false
console.log(repeatedSubstringPattern('ababab')); // true
