class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const convertBST = root => {
  solve(root, 0);
  return root;
};

const solve = (ptr, sum) => {
  if (!ptr) return sum;

  const rightSum = solve(ptr.right, sum);
  ptr.val += rightSum;
  const leftSum = solve(ptr.left, ptr.val);

  return leftSum;
};

const a = new TreeNode(5, new TreeNode(2), new TreeNode(13));
console.log(convertBST(a)); // 18 -> [20, 13]
const b = new TreeNode(2, new TreeNode(0, new TreeNode(-4), new TreeNode(1)), new TreeNode(3));
console.log(convertBST(b)); // 5 -> [6 -> [2, 6], 3]
