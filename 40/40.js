const solve = (solution, sum, subArr, target, solutions) => {
  if (sum === target) return solutions.push(solution);
  if (sum < target) {
    for (let i = 0; i < subArr.length; ++i) {
      if (subArr[i] === subArr[i-1]) continue;
      solve([...solution, subArr[i]], sum + subArr[i], subArr.slice(i+1), target, solutions);
    }
  }
};

const combinationSum2 = (candidates, target) => {
  if (candidates.length === 0) return [];

  let solutions = [];

  candidates.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  solve([], 0, candidates, target, solutions);

  return solutions;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8)); // [[1,7],[1,2,5],[2,6],[1,1,6]]
console.log(combinationSum2([2,5,2,1,2], 5)); // [[1,2,2],[5]]
console.log(combinationSum2([5,4,5,1,5,3,1,4,5,5,4], 10)); // [[1,1,3,5],[1,1,4,4],[1,4,5],[5,5]]
