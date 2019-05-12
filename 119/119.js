const getRow = rowIndex => {
  let result = [[1]];
  
  for (let i = 1; i <= rowIndex; ++i) {
    let row = [1]; 
    for (let j = 1; j < i; ++j) {
      const el = result[i-1][j-1] + result[i-1][j];
      row.push(el);
    }
    row.push(1);
    result.push(row);
  }

  return result[rowIndex];
};

console.log(getRow(3)); // [1, 3, 3, 1]
