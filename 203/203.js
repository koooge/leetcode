class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const removeElements = (head, val) => {
  if (!head) return null;
  if (head.val === val) return null;
  if (!head.next) return head;

  if (head.next.val === val) head.next = head.next.next;
  removeElements(head.next, val);

  return head;
};

const a = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
console.log(removeElements(a, 6)); // 1 -> 2 -> 3 -> 4 -> 5
