class TreeNode {
	constructor(val, left, right) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const getMaxDepth = (myDepth, node) => {
	let depth = myDepth;

	if (!node.left && !node.right) return myDepth;

	if (node.left) {
		depth = getMaxDepth(myDepth + 1, node.left);
	}
	if (node.right) {
		const d = getMaxDepth(myDepth + 1, node.right);
		if (d > depth) depth = d;
	}

	return depth;
};

const maxDepth = root => {
	let depth = 1;

	if (!root) return 0;

	if (root.left) {
		depth = getMaxDepth(2, root.left);
	}
	if (root.right) {
		const d = getMaxDepth(2, root.right);
		if (d > depth) depth = d;
	}

	return depth;
};

console.log(maxDepth(new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))))); // 3
console.log(maxDepth(null));
