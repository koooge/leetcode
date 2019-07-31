class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const sumOfLeftLeaves = (root, isLeft = false) => {
	if (!root) return 0;

	let sum = 0;

	if (root.left) {
		sum += sumOfLeftLeaves(root.left, true);
	}

	if (root.right) {
		sum += sumOfLeftLeaves(root.right, false);
	}

	if (!root.left && !root.right && isLeft) {
		sum += root.val;
	}
	
	return sum;
};

const a = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(sumOfLeftLeaves(a)); // 24
console.log(sumOfLeftLeaves(null)); // 0
