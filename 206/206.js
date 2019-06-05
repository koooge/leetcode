class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reverseList = head => {
  let rev = null;
   
  for (let ptr = head; ptr != null; ptr = ptr.next) {
    const node = Object.assign({}, ptr);
    node.next = rev;
    rev = node;
  }

  return rev;
};

const a = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseList(a)); // 5 -> 4 -> 3 -> 2 -> 1 -> NULL
