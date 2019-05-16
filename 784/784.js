const letterCasePermutation = S => {
  if (S[0].match(/[a-zA-Z]/)) {
    return solve(S.slice(1), [S[0].toLowerCase(), S[0].toUpperCase()]);
  } else {
    return solve(S.slice(1), [S[0]]);
  }
};

const solve = (S, results) => {
  if (S.length === 0) return results;

  let list = []
  if (S[0].match(/[a-zA-Z]/)) {
    for (let i = 0; i < results.length; ++i) {
      list.push(results[i] + S[0].toLowerCase());
      list.push(results[i] + S[0].toUpperCase());
    }
  } else {
    for (let i = 0; i < results.length; ++i) {
      list.push(results[i] + S[0]);
    }
  }

  return solve(S.slice(1), list);
}

console.log(letterCasePermutation('a1b2')); // ['a1b2', 'a1B2', 'A1b2', 'A1B2']
console.log(letterCasePermutation('3z4')); // ['3z4', '3Z4']
console.log(letterCasePermutation('12345')); // ['12345']
