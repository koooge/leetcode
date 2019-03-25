const convert = (s, numRows) => {
  let ans = '';
  
  for (let i = 0; i < numRows - 1; ++i) {
    for (let k = i; k < s.length; k += (numRows - 1 - i) * 2) {
      ans += s[k];
    }
  }
  for (let k = numRows - 1; k < s.length; k += (numRows - 1) * 2) {
    ans += s[k];
  }

  return ans;
};

console.log(convert('PAYPALISHIRING', 3)); // 'PAHNAPLSIIGYIR'
console.log(convert('PAYPALISHIRING', 4)); // 'PINALSIGYAHRPI'
console.log(convert('A', 1)); // 'A'
