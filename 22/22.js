const solve = (n, r, solution, solutions) => {
  if (n === 0 && r === 0) return solutions.push(solution);
  if (n > 0) solve(n-1, r, solution + '(', solutions);
  if (n < r && r > 0) solve(n, r-1, solution + ')', solutions);
};

const generateParenthesis = n => {
  let solutions = [];

  solve(n-1, n, '(', solutions);
  
  return solutions;
};

console.log(generateParenthesis(3)); // ['((()))', '(()())', '(())()', '()(())', '()()()']
