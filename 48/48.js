const rotate = matrix => {
  const len = matrix.length - 1;

  for (let i = 0; i < Math.floor(matrix.length / 2); ++i) {
    for (let j = i; j < matrix.length - (i + 1); ++j) {
      const tmp =  matrix[i][j]; 
      matrix[i][j] = matrix[len - j][i];
      matrix[len - j][i] = matrix[len - i][len - j];
      matrix[len - i][len - j] = matrix[j][len - i];
      matrix[j][len - i] = tmp;
    }
  }
};

const a = [[1,2,3],[4,5,6],[7,8,9]];
rotate(a);
console.log(a); // [[7,4,1],[8,5,2],[9,6,3]]

const b = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(b);
console.log(b); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
