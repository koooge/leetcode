const intersect = (nums1, nums2) => {
	for (let i = 0; i < nums1.length; ++i) {
	 for (let j = 0; j < nums2.length; ++j) {
			if (nums1[i] === nums2[j]) {
				let num = 1;
				for (let k = i + 1, l = j + 1; nums1[k] === nums2[l]; ++k, ++l) ++num;
				return nums1.slice(i, i + num);
			}
	 }
	}
	return [];
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
console.log(intersect([], [])); // []
