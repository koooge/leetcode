const intersect = (nums1, nums2) => {
	nums1.sort((a, b) => a > b);
	nums2.sort((a, b) => a > b);

	let result = [];

	for (let i = 0; i < nums1.length; ++i) {
		const index = nums2.indexOf(nums1[i]);
		if (index !== -1) {
			result.push(nums1[i]);
			nums2.splice(index, 1);
		}
	}

	return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
console.log(intersect([], [])); // []
console.log(intersect([1], [1])); // [1]
console.log(intersect([2, 1], [1, 2])); // [1, 2]
console.log(intersect([1, 2, 2, 1], [2])); // [2]
