const maxSubArray = (nums) => {
  let max;
  
  for (let i = 1; i <= nums.length; ++i) {
    for (let j = 0; j < nums.length - (i-1); ++j) {
      const subArray = nums.slice(j, j+i);
      const subSum = subArray.reduce((prev, curr) => prev + curr);
      if (max === undefined || subSum > max) max = subSum;
    }
  }

  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([-1])); // -1
console.log(maxSubArray([-1, 0])); // 0
