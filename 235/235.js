class TreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const lowestCommonAncestor = (root, p, q) => {
	if (p.val > root.val && q.val > root.val) {
		return lowestCommonAncestor(root.right, p, q);
	} else if (p.val < root.val && q.val < root.val) {
		return lowestCommonAncestor(root.left, p, q);
	} else {
		return root;
	}
};

const p1 = new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5)));
const q1 = new TreeNode(8, new TreeNode(7), new TreeNode(9));
const a = new TreeNode(6, p1, q1);
console.log(lowestCommonAncestor(a, p1, q1)); // 6

const q2 = new TreeNode(4, new TreeNode(3), new TreeNode(5));
const p2 = new TreeNode(2, new TreeNode(0), q2);
const b = new TreeNode(6, p2, new TreeNode(8, new TreeNode(7), new TreeNode(9)));
console.log(lowestCommonAncestor(b, p2, q2)); // 2
