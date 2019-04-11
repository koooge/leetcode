const combinationSum = (candidates, target) => {
  candidates.sort((a, b) => a - b);
  let solutions = [];

  search(0, solutions, [], candidates, target);

  return solutions;
};

const search = (idx, solutions, prefix, candidates, target) => {
  if (target === 0) solutions.push(prefix.slice());
  if (idx === candidates.length) return;
  if (target <= 0) return;

  prefix.push(candidates[idx]);
  search(idx, solutions, prefix, candidates, target - candidates[idx]);
  prefix.pop();
  search(idx + 1, solutions, prefix, candidates, target);
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[7], [2, 2, 3]]
console.log(combinationSum([2, 3, 5], 8)); // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
