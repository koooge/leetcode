const solve = (results, result, nums) => {
  if (nums.length === 0) results.push(result.slice());

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === nums[i-1]) continue;
    result.push(nums[i]);
    solve(results, result.slice(), nums.slice(0, i).concat(nums.slice(i+1)));
    result.pop();
  }
};

const permuteUnique = nums => {
  let results = [];

  nums.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  })

  solve(results, [], nums);

  return results;
};

console.log(permuteUnique([1,1,2])); // [[1,1,2],[1,2,1],[2,1,1]]
console.log(permuteUnique([3,3,0,3])); // [[0,3,3,3],[3,0,3,3],[3,3,0,3],[3,3,3,0]]
