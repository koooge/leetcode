const searchRange = (nums, target) => {
  let ans = [-1, -1];

  for (let i = 0, start = false; i < nums.length; ++i) {
    if (!start && nums[i] === target) {
      ans[0] = i;
      start = true;
    }
    if (start && nums[i] === target) {
      ans[1] = i;
    }

  }

  return ans;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
console.log(searchRange([1], 1)); // [0, 0]
