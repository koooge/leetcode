class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

const hasCycle = head => {
  if (!head) return false;
  let walker = runner = head;
    
  while (walker.next && (runner.next && runner.next.next)) {
    if (walker.next == runner.next.next) return true;
    walker = walker.next;
    runner = runner.next.next;
  }

  return false;
};

const a = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))));
a.next.next.next.next = a.next;
console.log(hasCycle(a)); // true

const b = new ListNode(1, new ListNode(2));
b.next.next = b;
console.log(hasCycle(b)); // true

const c = new ListNode(1);
console.log(hasCycle(c)); // false
