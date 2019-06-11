const canJump = (nums) => {
	let last = nums.length - 1;
	for (i = last - 1; i >= 0; --i) {
		if (i + nums[i] >= last) last = i;
	}
	return last <= 0;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0])); // true
