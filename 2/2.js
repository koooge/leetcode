class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = (l1, l2) => {
  let head = new ListNode(0, null);;

  let carry = 0;
  for (let prev = head, node1 = l1, node2 = l2;
    node1 !== null || node2 !== null;
    node1 = node1 ? node1.next : null, node2 = node2 ? node2.next : null) {

    const val1 = node1 ? node1.val : 0;
    const val2 = node2 ? node2.val : 0;
    const sum  =  val1 + val2 + carry;
    carry = sum >= 10 ? 1 : 0;

    const node = new ListNode(Math.floor(sum % 10), null);
    prev.next = node;
    prev = node; 
  }

  return head.next;
};

// case1
let l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));
console.log(addTwoNumbers(l1, l2)); // 7 -> 0 -> 8

// case2
l1 = new ListNode(0, null);
l2 = new ListNode(0, null);
console.log(addTwoNumbers(l1, l2)); // 0

// case3
l1 = new ListNode(1, new ListNode(8, null));
l2 = new ListNode(0, null);
console.log(addTwoNumbers(l1, l2)); // 1 -> 8

// case4
l1 = new ListNode(5, null);
l2 = new ListNode(5, null);
console.log(addTwoNumbers(l1, l2)); // 0 -> 1
