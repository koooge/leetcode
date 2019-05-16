class Node {
  constuctor(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft || null;
    this.topRight = topRight || null;
    this.bottomLeft = bottomLeft || null;
    this.bottomRight = bottomRight || null;
  }
}

const construct = (grid, row = 0, col = 0, len = grid.length) => {
  if(isLeaf(grid, row, col, len)) return new Node(grid[row][col], true);
    
  let res = new Node(true, false);
  const half = Math.floor(len / 2);
    
  res.topLeft = construct(grid, row, col, half);
  res.topRight = construct(grid, row, col + half, half);
  res.bottomLeft = construct(grid, row + half, col, half);
  res.bottomRight = construct(grid, row + half, col + half, half);
    
  return res;
};

const isLeaf = (grid, row, col, len) => {
  const rowLength = len + row, colLength = len + col;
  const val = grid[row][col];
    
  for(let i = row; i < rowLength; i++) {
    for(let j = col; j < colLength; j++) {
      if(val !== grid[i][j]) return false;
    }
  }
  return true;
};

const a = [
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
];

console.log(construct(a));
// (false, *) --topLeft-- (true, true)
//            --topRight-- (false, *) --topLeft-- (true, false)
//                                    --topRight-- (true, false)
//            --bottomLeft-- (true, true)
//            --bottomRight-- (true, false)

