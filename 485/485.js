const findMaxConsecutiveOnes = nums => {
  let max = 0;
  let num = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 1) {
      num++;
    } else {
      if (num > max) max = num;
      num = 0;
    }
  }
  if (num > max) max = num;

  return max;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // 3
