class TreeNode {
	constructor(val, left, right) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const heapify = (root, nums) => {
	const val = nums.shift();
	const node = new TreeNode(val, null, null);

	if (val > root.val) {
		node.left = root;
		node.right = root.right;
	} else {
		node.right = root;
		node.left = root.left;
	}
	root = node;

	// sort

	heapify(root, nums);
};

const sortedArrayToBST = nums => {
	if (nums.length === 0) return null;

	rootIndex = Math.floor(nums.length/2);
	let root = new TreeNode(nums[rootIndex]);
	nums.splice(rootIndex, 1);
	heapify(root, nums);

	return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
