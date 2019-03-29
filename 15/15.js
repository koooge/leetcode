const threeSum = (nums) => {
	let solutions = [];

	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 2; ++i) {
		if (nums[i] > 0) break;
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		for (let j = i + 1, k = nums.length - 1; j < k;) {
			let sum = nums[i] + nums[j] + nums[k];
			if (nums[i] + nums[j] + nums[k] === 0) {
				solutions.push([nums[i], nums[j++], nums[k++]]);
				while (j < k && nums[j] === nums[j - 1]) ++j;
				while (j < k && nums[k] === nums[k + 1]) --k;
			} else if(sum> 0) {
				--k;
			} else {
				++j;
			}
		}
	}

	return solutions;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, 0, 1], [-1, -1, 2]]
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));  // [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
