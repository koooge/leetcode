const maxArea = (height) => {
  let max = 0;

  for (let i = 1; i < height.length - 1; ++i) {
    for (let j = i + 1; j < height.length; ++j) {
      let area = (j - i) * (height[i] <= height[j] ? height[i] : height[j]);
      if (area > max) max = area;
    }
  }

  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
