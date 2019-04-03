class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const swapPairs = head => {
  if (!head || !head.next) return head;
  let v1 = head, v2 = head.next, v3 = v2.next;
  v2.next = v1;
  v1.next = swapPairs(v3);
  return v2;
};

console.log(swapPairs(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null)))))); // 2 -> 1 -> 4 -> 3
