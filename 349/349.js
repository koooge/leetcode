const intersection = (nums1, nums2) => {
	let results = [];

	for (let i = 0; i < nums1.length; ++i) {
		if (nums2.includes(nums1[i]) && !results.includes(nums1[i])) results.push(nums1[i]);
	}

	return results;
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
