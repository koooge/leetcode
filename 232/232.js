class MyQueue {
	constructor() {
		this.queue = [];
	}

	push(x) {
		this.queue.push(x);
	}

	pop() {
		return this.queue.shift();
	}

	peek() {
		return this.queue[0];
	}

	empty() {
		return this.queue.length === 0;
	}
}

const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // 1
console.log(queue.pop()); // 1
console.log(queue.empty()); // false
