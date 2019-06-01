class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = (l1, l2) => {
  const array1 = listToArray(l1);
  const array2 = listToArray(l2);
  const len = Math.max(array1.length, array2.length);

  let sumArray = [];

  let carry = 0;
  for (let i = 0; i < len; ++i) {
    const a1 = array1[array1.length - 1 - i] || 0;
    const a2 = array2[array2.length - 1 - i] || 0;
    const sum = a1 + a2 + carry;
    carry = 0;
    if (sum >= 10) carry = 1;
    sumArray.unshift(sum % 10);
  }
  if (carry) sumArray.unshift(1);

  let head = new ListNode(sumArray[sumArray.length - 1]); 
  for (let i = sumArray.length - 2; i >= 0; --i) {
    const node = new ListNode(sumArray[i]);
    node.next = head;
    head = node;
  }

  return head;
};

const listToArray = head => {
  let ptr = head;
  let nums = [];

  while (ptr) {
    nums.push(ptr.val);
    ptr = ptr.next;
  }

  return nums;
};

const a1 = new ListNode(7, new ListNode(2, new ListNode(4, new ListNode(3))));
const a2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(a1, a2)); // 7 -> 8 -> 0 -> 7

const b1 = new ListNode(5);
const b2 = new ListNode(5);
console.log(addTwoNumbers(b1, b2)); // 1 -> 0
