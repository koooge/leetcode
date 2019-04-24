const licenseKeyFormatting = (S, K) => {
  let ans = [];
  S = S.replace(/-/g,'').toUpperCase();

  for (let i = j = 0; i < S.length; ++i, ++j) {
    if (j === K) {
      ans.unshift('-');
      j = 0;
    }
    ans.unshift(S[S.length - 1 - i]);
  }

  return ans.join('');
};

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4)); // '5F3Z-2E9W'
console.log(licenseKeyFormatting('2-5g-3-J', 2)); // '2-5G-3J'
console.log(licenseKeyFormatting('a-a-a-a-', 1)); // 'A-A-A-A'
