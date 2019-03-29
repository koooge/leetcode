const threeSum = (nums) => {
	let solutions = [];
	let sortedDedupedArray = [];

	nums.sort((a, b) => {
		return a -b;
	});

	for (let i = 0; i < nums.length - 2; ++i) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		for (let j = i + 1; j < nums.length - 1 ; ++j) {
			if (j > i + 1 && nums[j] === nums[j - 1]) continue;
			let rest = -(nums[i] + nums[j]) || 0;
			let index = nums.lastIndexOf(rest);
			if (index !== -1 && index > j) solutions.push([nums[i], nums[j], nums[index]]);
		}
	}

	return solutions;
};


console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, 0, 1], [-1, -1, 2]]
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));  // [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
