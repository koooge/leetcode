class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const getMinimumDifference = root => {
	let values = [root.val];

	if (root.left) getVals(root.left, values);
	if (root.right) getVals(root.right, values);

	values.sort((a, b) => {
		if (a > b) return 1;
		if (a < b) return -1;
		return 0;
	});

	let min = Number.MAX_SAFE_INTEGER;
	for (let i = 0; i < values.length - 1; ++i) {
		const diff = values[i + 1] - values[i];
		min = Math.min(min, diff);
	}

	return min;
};

const getVals = (ptr, values) => {
	values.push(ptr.val);

	if (ptr.left) getVals(ptr.left, values);
	if (ptr.right) getVals(ptr.right, values);
};

const a = new TreeNode(1, null, new TreeNode(3, new TreeNode(2)));
console.log(getMinimumDifference(a)); // 1

const b = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4));
console.log(getMinimumDifference(b)); // 1

const c = new TreeNode(236, new TreeNode(104, null, new TreeNode(227)), new TreeNode(701, null, new TreeNode(911)));
console.log(getMinimumDifference(c)); // 9
