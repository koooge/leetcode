const canJump = (nums, pos = 0) => {
	const n = Math.min(nums[pos], nums.length - 1);
	if (pos === nums.length - 1) return true;
	if (n === 0) return false;

	for (let i = n; i >= 1; --i) {
		if (canJump(nums, pos + i)) return true;
	}

	return false;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0])); // true
