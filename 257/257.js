class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const binaryTreePaths = root => {
	if (!root) return [];

	let paths = [];

	solve(root, [], paths);

	return paths;
};

const solve = (ptr, path, paths) => {
	path.push(ptr.val);

	if (!ptr.left && !ptr.right) {
		paths.push(path.join('->'));
		return;
	}

	if (ptr.left) solve(ptr.left, path.slice(), paths);
	if (ptr.right) solve(ptr.right, path.slice(), paths);
};

const a = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3));
console.log(binaryTreePaths(a)); // ["1->2->5", "1->3"]
console.log(binaryTreePaths(null)); // []
