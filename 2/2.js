class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = (l1, l2) => {
  let num1 = num2 = 0;

  for (let digit = 1, node1 = l1, node2 = l2;
    node1 !== null && node2 !== null;
    digit *= 10, node1 = node1.next, node2 = node2.next) {
    num1 += node1.val * digit;
    num2 += node2.val * digit;
  }
  const sum = num1 + num2;
  
  let arr = [];
  if (sum === 0) {
    arr.push(new ListNode(0, null));
  } else {
    for (let num = sum; num !== 0; num = Math.floor(num / 10)) {
      arr.push(new ListNode(num % 10, null));
    }
  }

  for (let i = 0; i < arr.length - 1; ++i) {
    arr[i].next = arr[i+1];
  }

  return arr[0];
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
