const reverseVowels = s => {
  s = s.split('');

  for (let i = 0, last = s.length - 1; i < last; ++i) {
    if (/[aeiouAEIOU]/.test(s[i])) {
      for (let j = last; j > i; --j) {
        if (/[aeiouAEIOU]/.test(s[j])) {
          [s[i], s[j]] = [s[j], s[i]];
          last = j - 1;
          break;
        }
      }
    }
  }
  return s.join('');
};

console.log(reverseVowels('hello')); // 'holle'
console.log(reverseVowels('leetcode')); // 'leotcede'
console.log(reverseVowels('aA')); // 'Aa'
