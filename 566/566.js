const matrixReshape = (nums, r, c) => {
	const m = nums.length, n = nums[0].length;
	if (r * c !== m * n) return nums;

	const ans = [];

	for (let i = 0, a = 0, b = 0; i < r; i++) {
		for (let j = 0; j < c; j++) {
			const num = nums[a][b++];
			ans[i] = ans[i] ? ans[i].concat([num]) : [num];
			if (b === n) {
				++a;
				b = 0;
			}
		}
	}

	return ans;
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4)); // [[1, 2, 3, 4]]
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4)); // [[1, 2], [3, 4]]
console.log(matrixReshape([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]], 42, 5)); // [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]
