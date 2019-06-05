const largeGroupPositions = S => {
  let i = j = 0;
  let res = [];

  S.split('').forEach(c => {
    j = i + 1;
    while (j < S.length && S[j] === S[i]) ++j;
    if (j - i > 2) res.push([i, j - 1]);
    i = j;
  });

  return res;
};

console.log(largeGroupPositions('abbxxxxzzy')); // [[3, 6]]
console.log(largeGroupPositions('abc')); // []
console.log(largeGroupPositions('abcdddeeeeaabbbcd')); // [[3, 5], [6, 9], [12, 14]]
