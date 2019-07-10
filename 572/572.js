class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const isSubtree = (s, t) => {
  const isSame = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    if (a.val !== b.val) return false;
    return isSame(a.left, b.left) && isSame(a.right, b.right);
  };

  if (!s) return false;
  if (isSame(s, t)) return true;
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

const a = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5));
const b = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log(isSubtree(a, b)); // true

const c = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))), new TreeNode(5));
const d = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log(isSubtree(c, d)); // false

const e = new TreeNode(1, new TreeNode(1));
const f = new TreeNode(1);
console.log(isSubtree(e, f)); // true

const g = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const h = new TreeNode(1, new TreeNode(2));
console.log(isSubtree(g, h)); // false

const i = new TreeNode(3, new TreeNode(4, new TreeNode(1)), new TreeNode(5, new TreeNode(2)));
const j = new TreeNode(3, new TreeNode(1), new TreeNode(2));
console.log(isSubtree(i, j)); // false
