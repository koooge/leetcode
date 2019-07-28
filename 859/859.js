const buddyStrings = (A, B) => {
  if (A.length !== B.length) return false;

  const diff = [];
  const chars = new Set(A);

  for (const i in A) {
    if (A[i] !== B[i]) diff.push([A[i], B[i]]);
  }

  return diff.length === 2 && diff[0].join() === diff[1].reverse().join() || (diff.length === 0 && chars.size !== A.length);
};

console.log(buddyStrings('ab', 'ba')); // true
console.log(buddyStrings('ab', 'ab')); // false
console.log(buddyStrings('aa', 'aa')); // true
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb')); // true
console.log(buddyStrings('', 'aa')); // false