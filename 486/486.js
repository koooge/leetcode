const PredictTheWinner = nums => {
  if (nums.legnth <= 2) return true;
  return solve(0, 0, nums);
};

const solve = (p1, p2, nums) => {
  const len = nums.length;

  if (len === 1) {
    return p1 + nums[0] > p2;
  } else if (len === 2) {
    p1 += Math.max(...nums);
    p2 += Math.min(...nums);
    return p1 > p2;
  }

  // P1: left
  if (nums[1] >= nums[len - 1]) {
    if (solve(p1 + nums[0], p2 + nums[1], nums.slice(2))) return true;
  } else {
    if (solve(p1 + nums[0], p2 + nums[len - 1], nums.slice(1, len - 1))) return true;
  }


  // P1: right
  if (nums[0] >= nums[len - 2]) {
    if (solve(p1 + nums[len - 1], p2 + nums[0], nums.slice(1, len - 1))) return true;
  } else {
    if (solve(p1 + nums[len - 1], p2 + nums[len - 2], nums.slice(0, len - 2))) return true;
  }

  return false;
};

console.log(PredictTheWinner([1, 5, 2])); // false
console.log(PredictTheWinner([1, 5, 233, 7])); // true
