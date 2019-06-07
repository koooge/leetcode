const containsNearbyDuplicate = (nums, k) => {
	let dict = {};

	for (let i = 0; i < nums.length; ++i) {
		if (dict[nums[i]] >= 0 && i - dict[nums[i]] <= k) return true;
		dict[nums[i]] = i;
	}

	return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
