class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const deleteDuplicates = head => {
  let ptr = head;

  while (ptr !== null && ptr.next !== null) {
    if (ptr.next.val === ptr.val) {
      ptr.next = ptr.next.next;
    } else {
      ptr = ptr.next;
    }
  }

  return head;
};

console.log(new ListNode(1, new ListNode(1, new ListNode(2, null)))); // 1 -> 2
console.log(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, null)))))); // 1 -> 2 -> 3
console.log([]); // 
