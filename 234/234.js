class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

const isPalindrome = head => {
	const array = [];
	let ptr = head;

	while (ptr) {
		array.push(ptr.val);
		ptr = ptr.next;
	}

	const len = array.length;
	for (let i = 0; i < len / 2; ++i) {
		if (array[i] !== array[len - 1 - i]) return false;
	}

	return true;
};

const a = new ListNode(1, new ListNode(2));
console.log(isPalindrome(a)); // false
const b = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindrome(b)); // true
console.log(isPalindrome(null)); // true
