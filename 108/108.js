class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const helper = (nums, low, high) => {
  if (low > high) return null;

  let mid = Math.floor((low + high) / 2);
  let node = new TreeNode(nums[mid], null, null);
  node.left = helper(nums, low, mid - 1);
  node.right = helper(nums, mid + 1, high);

  return node;
};

const sortedArrayToBST = nums => {
  if (nums.length === 0) return null;

  let root = helper(nums, 0, nums.length - 1);

  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
