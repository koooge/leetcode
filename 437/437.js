class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const pathSum = (root, sum) => {
	if (!root) return 0;

	let count = {res: 0};
	getPath(root, sum, [], count);

	return count.res;
};

const getPath = (ptr, target, path, count) => {
	const _path = [...path, ptr.val];

	for (let i = _path.length - 1, subSum = 0; i >= 0; --i) {
		subSum += _path[i];
		if (subSum === target) ++count.res;
	}

	if (ptr.left) getPath(ptr.left, target, _path, count);
	if (ptr.right) getPath(ptr.right, target, _path, count);
};

const a = new TreeNode(10, new TreeNode(5, new TreeNode(3, new TreeNode(3), new TreeNode(-2)), new TreeNode(2, null, new TreeNode(1))), new TreeNode(-3, null, new TreeNode(11)));
console.log(pathSum(a, 8)); // 3
