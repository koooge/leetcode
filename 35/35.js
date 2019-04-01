const searchInsert = (nums, target) => {
	let ans = nums.length;

	for (let i = 0; i < nums.length; ++i) {
		if (target <= nums[i]) return i;
	}

	return ans;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
