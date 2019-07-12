class Node {
  constructor(val, children = null) {
    this.val = val;
    this.children = children;
  }
}

const preorder = (root, arr = []) => {
  if (!root) return arr;

  arr.push(root.val);
  if (root.children) root.children.forEach(child => preorder(child, arr));

  return arr;
};

const a = new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)]);
console.log(preorder(a)); // [1, 3, 5, 6, 2, 4]
