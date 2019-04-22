const setZeroes = matrix => {
  let zeroes = [];

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j] === 0) zeroes.push([i, j]);
    }
  }

  zeroes.forEach(el => {
    for (let i = 0; i < matrix.length; ++i) {
      matrix[i][el[1]] = 0;
    }

    for (let i = 0; i < matrix[0].length; ++i) {
      matrix[el[0]][i] = 0;
    }
  });
};

const a = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(a);
console.log(a); // [[1,0,1],[0,0,0],[1,1,1]]

const b = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(b);
console.log(b); // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
