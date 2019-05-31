class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const getMinimumDifference = root => {
	let min = Number.MAX_SAFE_INTEGER;
	if (root.left) min = solve(root.left, root.val, min)
	if (root.right) {
		const minRight = solve(root.right, root.val, min);
		if (minRight < min) min = minRight;
	}
	return min;
};

const solve = (ptr, parentVal, min) => {
	const diff = Math.abs(parentVal - ptr.val);
	if (diff < min) min = diff;

	if (ptr.left) min = solve(ptr.left, ptr.val, min)
	if (ptr.right) {
		const minRight = solve(ptr.right, ptr.val, min);
		if (minRight < min) min = minRight;
	}
	return min;
};

const a = new TreeNode(1, null, new TreeNode(3, new TreeNode(2)));
console.log(getMinimumDifference(a)); // 1

const b = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4));
console.log(getMinimumDifference(b)); // 1

const c = new TreeNode(236, new TreeNode(104, null, new TreeNode(227)), new TreeNode(701, null, new TreeNode(911)));
console.log(getMinimumDifference(c)); // 9
