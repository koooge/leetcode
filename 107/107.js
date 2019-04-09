class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const order = (ptr, ans, depth) => {
  if (ans.length > depth) {
    ans[ans.length - 1 - depth].push(ptr.val);
  } else {
    ans.unshift([ptr.val]);
  }

  if (ptr.left) order(ptr.left, ans, depth + 1);
  if (ptr.right) order(ptr.right, ans, depth + 1);
};

const levelOrderBottom = root => {
  if (!root) return [];

  let ans = [];
  ans.unshift([root.val]);
  if (root.left) order(root.left, ans, 1);
  if (root.right) order(root.right, ans, 1);
  
  return ans;
};

const a = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)));
console.log(levelOrderBottom(a)); // [[15, 7], [9, 20], [3]]
