  const fairCandySwap = (A, B) => {
    const sumA = A.reduce((prev, curr) => prev + curr);
    const sumB = B.reduce((prev, curr) => prev + curr);
    const diff = (sumA - sumB) / 2;
    for (let i = 0; i < A.length; ++i) {
      for (let j = 0; j < B.length; ++j) {
        if (A[i] - B[j] === diff) return [A[i], B[j]];
      }
    }
  };

console.log(fairCandySwap([1, 1], [2, 2])); // [1, 2]
console.log(fairCandySwap([1, 2], [2, 3])); // [1, 2]
console.log(fairCandySwap([2], [1, 3])); // [2, 3]
console.log(fairCandySwap([1, 2, 5], [2, 4])); // [5, 4]