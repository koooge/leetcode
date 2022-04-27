import assert from 'assert';

class Node {
  val: number
  children: Node[]
  constructor(val?: number, children?: Node[]) {
    this.val = (val===undefined ? 0 : val)
    this.children = (children===undefined ? [] : children)
  }
}

function maxDepth(root: Node | null, depth: number = 0): number {
  if (!root) return depth;

  let max = depth + 1;
  root.children.forEach(child => {
    max = Math.max(maxDepth(child, depth + 1), max);
  });
  return max;
};

assert.strictEqual(maxDepth(new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)])), 3);
assert.strictEqual(maxDepth(new Node(1, [
  new Node(2),
  new Node(3, [
    new Node(6),
    new Node(7, [new Node(11, [new Node(14)])]),
  ]),
  new Node(4, [new Node(8, [new Node(12)])]),
  new Node(5, [
    new Node(9, [new Node(10)]),
    new Node(10),
  ]),
])), 5);
assert.strictEqual(maxDepth(null), 0);
