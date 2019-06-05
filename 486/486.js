const PredictTheWinner = nums => {
  return solve(nums, 0, 0, 0);
};

const solve = (nums, p1, p2, turn) => {
  const len = nums.length;
  if (len === 0) return p1 >= p2;

  if (turn) {
    return solve(nums.slice(1), p1, p2 + nums[0], 0) && solve(nums.slice(0, len - 1), p1, p2 + nums[len - 1], 0);
  }
  return solve(nums.slice(1), p1 + nums[0], p2, 1) || solve(nums.slice(0, len - 1), p1 + nums[len - 1], p2, 1);
};

console.log(PredictTheWinner([1, 5, 2])); // false
console.log(PredictTheWinner([1, 5, 233, 7])); // true
console.log(PredictTheWinner([0])); // true
console.log(PredictTheWinner([2, 4, 55, 6, 8])); // false
