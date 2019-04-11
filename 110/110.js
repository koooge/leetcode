class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const getMaxDepth = (ptr, depth) => {
  let maxDepth = depth;
  
  if (ptr.left) {
    const leftDepth = getMaxDepth(ptr.left, depth + 1);
    if (leftDepth > maxDepth) maxDepth = leftDepth;
  }
  if (ptr.right) {
    const rightDepth = getMaxDepth(ptr.right, depth + 1);
    if (rightDepth > maxDepth) maxDepth = rightDepth;
  }

  return maxDepth;
};

const isBalanced = root => {
  if (!root) return true;

  let leftLen = rightLen = 1;
  if (root.left) leftLen = getMaxDepth(root.left, 2);
  if (root.right) rightLen = getMaxDepth(root.right, 2);

  return Math.abs(leftLen - rightLen) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

const rootA = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)));
console.log(isBalanced(rootA)); // true

const rootB = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4, null, null), new TreeNode(4, null, null)), new TreeNode(3, null, null)), new TreeNode(2, null, null));
console.log(isBalanced(rootB)); // false

const rootC = new TreeNode(1, new TreeNode(2, null, null), null);
console.log(isBalanced(rootC)); // true

const rootD = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4, null, null), null)), new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, null))));
console.log(isBalanced(rootD)); // false
