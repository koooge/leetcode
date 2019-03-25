const convert = (s, numRows) => {
  if (numRows === 1) return s;

  let arr = [];

  for (let i = 0; i < s.length; ++i) {
    let k = i % ((numRows - 1) * 2);
    let n = (numRows - 1) >= k ?  k : (numRows - 1) - (k - (numRows - 1));
    arr[n] = [arr[n], s[i]].join('');
  }

  return arr.join('');
};

console.log(convert('PAYPALISHIRING', 3)); // 'PAHNAPLSIIGYIR'
console.log(convert('PAYPALISHIRING', 4)); // 'PINALSIGYAHRPI'
console.log(convert('A', 1)); // 'A'
