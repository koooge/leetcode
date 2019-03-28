class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (l1, l2) => {
  let l1Ptr = l1, l2Ptr = l2;
  let head = tail = null;

  while (l1Ptr !== null || l2Ptr !== null) {
    let node;
    if (l2Ptr === null || (l1Ptr !== null && l1Ptr.val <= l2Ptr.val)) {
      node = new ListNode(l1Ptr.val, null);
      l1Ptr = l1Ptr.next
    } else {
      node = new ListNode(l2Ptr.val, null);
      l2Ptr = l2Ptr.next
    }

    if (head !== null) {
      tail.next = node;
      tail = tail.next; 
    } else {
      head = tail = node;
    }
  }

  return head;
};

const l1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
console.log(JSON.stringify(mergeTwoLists(l1, l2)));
console.log(JSON.stringify(mergeTwoLists(null, null)));
