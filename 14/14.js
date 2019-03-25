const longestCommonPrefix = (strs) => {
  let maxLen = 0;
  for (let i = 0; i < strs.length; ++i) {
    if (strs[i].length > maxLen) maxLen = strs[i].length;
  }

  let prefix = '';
  for (let i = 0; i < maxLen; ++i) {
    for (let j = 0; j < strs.length; ++j) { // || diff
      if (strs[j][i] !== strs[0][i]) return prefix;
    }
    prefix += strs[0][i];
  }

  return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''
