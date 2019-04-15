class MinStack {
	constructor() {
		this.arr = [];
	}

	push(x) {
		this.arr.push(x);
	}

	pop() {
		this.arr.pop();
	}

	top() {
		return this.arr[this.arr.length - 1];
	}

	getMin() {
		return Math.min(...this.arr);
	}
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2
