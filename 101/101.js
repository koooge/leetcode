class TreeNode {
	constructor(val, left, right) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const solve = (left, right) => {
	if (!left && !right) return true;
	if (!left || !right) return false;
	if (left.val !== right.val) return false;
	return solve(left.left, right.right) && solve(left.right, right.left);
};

const isSymmetric = root => {
	return root === null || solve(root.left, root.right);
};

console.log(isSymmetric(new TreeNode(1, new TreeNode(2, new TreeNode(3, null, null), new TreeNode(4, null, null)), new TreeNode(2, new TreeNode(4, null, null), new TreeNode(3, null, null))))); // true
console.log(isSymmetric(new TreeNode(1, new TreeNode(2, null, new TreeNode(3, null, null)), new TreeNode(2, null, new TreeNode(3, null, null))))); // false
console.log(isSymmetric(new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null))));
