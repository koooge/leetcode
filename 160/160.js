class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

const getIntersectionNode = (headA, headB) => {
	for (let ptrA = headA; ptrA != null; ptrA = ptrA.next) {
		for (let ptrB = headB; ptrB != null; ptrB = ptrB.next) {
			if (ptrA === ptrB) return ptrA;
		}
	}
	return null;
};

const ab = new ListNode(8, new ListNode(4, new ListNode(5)));
const a =	new ListNode(4, new ListNode(1, ab));
const b = new ListNode(5, new ListNode(0, new ListNode(1, ab)));
console.log(getIntersectionNode(a, b)); // ListNode[8]
