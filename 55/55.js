const canJump = (nums, pos = 0) => {
	const n = nums[pos];
	if (pos === nums.length - 1) return true;
	if (n === 0) return false;

	for (let i = n; i >= 1; --i) {
		let jump = pos + i;
		if (jump === nums.length - 1) return true;
		if (jump > nums.length - 1) continue;
		if (jump < nums.length - 1 && canJump(nums, jump)) return true;
	}
	return false;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0])); // true
