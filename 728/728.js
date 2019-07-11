const selfDividingNumbers = (left, right) => {
  let ans = [];

  for (let i = left; i <= right; ++i) {
    const str = String(i);
    if (str.match('0')) continue;

    for (let j = 0; j < str.length; ++j) {
      if (i % str[j] !== 0) break;
      if (j === str.length - 1) ans.push(i); 
    }
  }

  return ans;
};

console.log(selfDividingNumbers(1, 22)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
