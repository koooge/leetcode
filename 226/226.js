class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const invertTree = root => {
	if (root && (root.left || root.right)) {
		const tmp = root.left;
		root.left = root.right;
		root.right = tmp;
		if (root.left) invertTree(root.left);
		if (root.right) invertTree(root.right);
	}
	return root;
};

const a = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
console.log(invertTree(a)); // 4 > (7 > (9, 6), 2 > (3, 1))
