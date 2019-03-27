const maxSubArray = (nums) => {
  let max = Number.MIN_SAFE_INTEGER;
  let value = 0;
  
  for (let i = 0; i < nums.length; ++i) {
    if (value > 0) {
      value += nums[i];
    } else {
      value = nums[i];
    }
    if (value > max) max = value;
  }

  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([-1])); // -1
console.log(maxSubArray([-1, 0])); // 0
