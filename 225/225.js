class MyStack {
	constructor() {
		this.stack = [];
	}

	push(x) {
		this.stack.push(x);
	}

	pop() {
		return this.stack.pop();
	}

	top() {
		return this.stack[this.stack.length - 1];
	}

	empty() {
		return this.stack.length === 0;
	}
}

const stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top()); // 2
console.log(stack.pop()); // 2
console.log(stack.empty()); // false
