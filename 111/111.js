class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const minDepth = root => {
  if (!root) return 0;
  const left = minDepth(root.left);
  const right = minDepth(root.right);

  return !left || !right ? left + right + 1 : Math.min(left, right) + 1;
};

const rootA = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)));
console.log(minDepth(rootA)); // 2

const rootB = new TreeNode(1, null, new TreeNode(2, null, null));
console.log(minDepth(rootB)); // 2

const rootC = new TreeNode(0, null, null);
console.log(minDepth(rootC)); // 1

const rootD = new TreeNode(1, new TreeNode(2, new TreeNode(4, null, null), null), new TreeNode(3, null, new TreeNode(5, null, null)));
console.log(minDepth(rootD)); // 3
