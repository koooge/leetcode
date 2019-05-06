const rotate = (nums, k) => {
	for (let i = 0; i < k; ++i) {
		nums.unshift(nums.pop());
	}
};

const a = [1, 2, 3, 4, 5, 6, 7];
rotate(a, 3);
console.log(a); // [5, 6, 7, 1, 2, 3, 4]

const b = [-1, -100, 3, 99];
rotate(b, 3);
console.log(b); // [3, 99, -1, -100]
