const threeSumClosest = (nums, target) => {
  let closest = Number.MAX_SAFE_INTEGER;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; ++i) {
    if (nums[i] > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length -1; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        let threeSum = nums[i] + nums[j] + nums[k];
        if (threeSum === target) return target;
        if (Math.abs(target - threeSum) < Math.abs(target - closest)) closest = threeSum;
      }
    }
  }

  return closest;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosest([1, 1, 1, 0], -100)); // 2
