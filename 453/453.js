const minMoves = nums => {
  const sum = nums.reduce((a, b) => a + b);
  return sum - nums.length * Math.min(...nums);
};

console.log(minMoves([1, 2, 3])); // 3