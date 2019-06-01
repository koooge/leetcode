const isToeplitzMatrix = matrix => {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (i + j === n) break;
      if (matrix[j][i + j] !== matrix[0][i]) return false;
    }
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i + j === m) break;
      if (matrix[i + j][j] !== matrix[i][0]) return false;
    }
  }

  return true;
};

console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]])); // true
