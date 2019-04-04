const merge = (nums1, m, nums2, n) => {
	for (let i = m; i < m + n; ++i) {
		nums1[i] = nums2[i - m];
	}
	nums1.sort((a, b) => {
		if (a > b) return 1;
		if (a < b) return -1;
		return 0;
	});
};

let nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1) ; // [1, 2, 2, 3, 5, 6]
