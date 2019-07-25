class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

const deleteNode = node => {
	if(node.val !== undefined && node.next !== undefined){
		node.val = node.next.val;
		node.next = node.next.next;
	}
};

const a = new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(9))));
console.log(deleteNode(a)); // [4, 1, 9]

console.log(deleteNode(a)); // [4, 5, 9]
