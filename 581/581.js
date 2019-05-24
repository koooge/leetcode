const findUnsortedSubarray = nums => {
	const sorted = [...nums];

	sorted.sort((a, b) => {
		if (a > b) return 1;
		if (a < b) return -1;
		return 0;
	});

	let sortedLeft = -1;
	let sortedRight = nums.length;
	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] !== sorted[i]) break;
		sortedLeft = i;
	}
	for (let i = nums.length - 1; i >= 0; --i) {
		if (nums[i] !== sorted[i]) break;
		sortedRight = i;
	}

	const unsortedArray = nums.slice(sortedLeft + 1, sortedRight);

	return unsortedArray.length;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])); // 5
console.log(findUnsortedSubarray([9, 2, 3, 4, 1, 2, 3, 1, 100, 101, 102, 103])); // 8
