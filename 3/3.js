const lengthOfLongestSubstring = (s) => {
  let max = 0;
  let substring = '';

  for (let i = 0; i < s.length; ++i) {
    const j = substring.indexOf(s[i]); 
    if (j >= 0) substring = substring.slice(j + 1);
    substring += s[i];

    if (substring.length > max) max = substring.length;
  }

  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('aab')); // 2
