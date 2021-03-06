const isValidSudoku = board => {
  let square = [[], [], [], [], [], [], [], [], []];

  for (let i = 0; i < 9; ++i) {
    for (let j = 0, row = [], column = []; j < 9; ++j) {
      const c = board[j][i];
      if (c !== '.') {
        if (column.includes(c)) return false;
        column.push(c);
      }

      const r = board[i][j];
      if (r !== '.') {
        if (row.includes(r)) return false;
        row.push(r);

        const index = (Math.floor(i/3) * 3) + Math.floor(j/3);
        if (square[index].includes(r)) return false;
        square[index].push(r);
      }
    }
  }

  return true;
};

const input1 = [
  ['5','3','.','.','7','.','.','.','.'],
  ['6','.','.','1','9','5','.','.','.'],
  ['.','9','8','.','.','.','.','6','.'],
  ['8','.','.','.','6','.','.','.','3'],
  ['4','.','.','8','.','3','.','.','1'],
  ['7','.','.','.','2','.','.','.','6'],
  ['.','6','.','.','.','.','2','8','.'],
  ['.','.','.','4','1','9','.','.','5'],
  ['.','.','.','.','8','.','.','7','9'],
];
console.log(isValidSudoku(input1)); // true

const input2 = [
  ['8','3','.','.','7','.','.','.','.'],
  ['6','.','.','1','9','5','.','.','.'],
  ['.','9','8','.','.','.','.','6','.'],
  ['8','.','.','.','6','.','.','.','3'],
  ['4','.','.','8','.','3','.','.','1'],
  ['7','.','.','.','2','.','.','.','6'],
  ['.','6','.','.','.','.','2','8','.'],
  ['.','.','.','4','1','9','.','.','5'],
  ['.','.','.','.','8','.','.','7','9'],
];

console.log(isValidSudoku(input2)); // false

const input3 = [
  [".",".",".",".","5",".",".","1","."],
  [".","4",".","3",".",".",".",".","."],
  [".",".",".",".",".","3",".",".","1"],
  ["8",".",".",".",".",".",".","2","."],
  [".",".","2",".","7",".",".",".","."],
  [".","1","5",".",".",".",".",".","."],
  [".",".",".",".",".","2",".",".","."],
  [".","2",".","9",".",".",".",".","."],
  [".",".","4",".",".",".",".",".","."]
];

console.log(isValidSudoku(input3)); // false
