class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const hasPathSum = (root, sum) => {
  if (!root) return false;

  if (!root.left && !root.right && sum - root.val === 0) return true;
  
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

const rootA = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7, null, null), new TreeNode(2, null, null)), null), new TreeNode(8, new TreeNode(13, null, null), new TreeNode(4, null, new TreeNode(1, null, null))));
console.log(hasPathSum(rootA, 22)); // true

const rootB = [];
console.log(hasPathSum(rootB, 1)); // false
