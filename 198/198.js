const rob = nums => {
	let a = 0;
	let b = 0;

	for (let i = 0; i < nums.length; ++i) {
		if (i % 2 === 0) {
			a = Math.max(a + nums[i], b);
		} else {
			b = Math.max(a, b + nums[i]);
		}
	}

	return Math.max(a, b);
};

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([2, 1, 1, 2])); // 4
console.log(rob([1, 2])); // 2
console.log(rob([1, 7, 9, 4])); // 11
console.log(rob([1, 3, 1])); // 3
console.log(rob([1, 3, 1, 3, 100])); // 103
