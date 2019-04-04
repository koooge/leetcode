class TreeNode {
	constructor(val, left, right) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const isSameTree = (p, q) => {
	if (p === null && q === null) return true;
	if (p === null || q === null) return false;
	if (p.val === q.val) {
		return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
	}

	return false;
};

const oneTwoThree = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null));
const oneTwo = new TreeNode(1, new TreeNode(2, null, null), null);
const oneNullThree = new TreeNode(1, null, new TreeNode(3, null, null));
const oneTwoOne = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(1, null, null));
const oneOneTwo = new TreeNode(1, new TreeNode(1, null, null), new TreeNode(2, null, null));

console.log(isSameTree(oneTwoThree, oneTwoThree)); // true
console.log(isSameTree(oneTwo, oneNullThree)); // false
console.log(isSameTree(oneTwoOne, oneOneTwo)); // false
