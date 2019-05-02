class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const removeElements = (head, val) => {
  if (!head) return null;

  if (head.val === val) {
    let next = head.next;
    while (next && next.val === val) next = next.next;
    head = next;
    if (head) removeElements(head, val);
  } else if (head.next) {
    if (head.next.val === val) {
      let next = head.next
      while (next && next.val === val) next = next.next;
      head.next = next;
      removeElements(head.next, val);
    } else {
      removeElements(head.next, val);
    }
  }

  return head;
};

const a = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
console.log(removeElements(a, 6)); // [1 -> 2 -> 3 -> 4 -> 5]

const b = new ListNode(1, new ListNode(2));
console.log(removeElements(b, 1)); // [2]

const c = new ListNode(1);
console.log(removeElements(c, 1)); // []

const d = new ListNode(1, new ListNode(1));
console.log(removeElements(d, 1)); // []

const e = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(removeElements(e, 2)); // [1, 1]
