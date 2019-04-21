const solve = (results, result, nums) => {
  if (nums.length === 0) return results.push(result.slice());

  for (let i = 0; i < nums.length; ++i) {
    result.push(nums[i]);
    solve(results, result.slice(), nums.slice(0, i).concat(nums.slice(i+1)));
    result.pop();
  }
};

const permute = nums => {
  let results = [];

  solve(results, [], nums);

  return results;
};

console.log(permute([1, 2, 3])); // [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
