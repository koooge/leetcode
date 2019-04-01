const fourSum = (nums, target) => {
	let solutions = [];

	nums.sort((a, b) => {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	});
	console.log(nums);

	for (let i = 0; i < nums.length - 3; ++i) {
		if (nums[i] === nums[i-1]) continue;
		for (let j = i + 1; j < nums.length - 2; ++j) {
			if (j-1 !== i && (nums[j] === nums[j-1] || nums[i] === nums[j])) continue;
			for (let k = j+1, l = nums.length-1; k < l;) {
				const sum = nums[i] + nums[j] + nums[k] + nums[l];
				if (sum === target) {
					solutions.push([nums[i], nums[j], nums[k++], nums[l--]]);
					while(nums[k] === nums[k-1]) ++k;
					while(nums[l] === nums[l+1]) ++l;
				} else if (sum > target) {
					--l;
				} else {
					++k;
				}
			}
		}
	}

	return solutions;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [[-1,  0, 0, 1], [-2, -1, 1, 2], [-2,  0, 0, 2]]
console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0)); // [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([-5,-4,-3,-2,-1,0,0,1,2,3,4,5], 0)); // [[-5,-4,4,5],[-5,-3,3,5],[-5,-2,2,5],[-5,-2,3,4],[-5,-1,1,5],[-5,-1,2,4],[-5,0,0,5],[-5,0,1,4],[-5,0,2,3],[-4,-3,2,5],[-4,-3,3,4],[-4,-2,1,5],[-4,-2,2,4],[-4,-1,0,5],[-4,-1,1,4],[-4,-1,2,3],[-4,0,0,4],[-4,0,1,3],[-3,-2,0,5],[-3,-2,1,4],[-3,-2,2,3],[-3,-1,0,4],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([5, 5, 3, 5, 1, -5, 1, -2], 4)); // [[-5,1,3,5]]
console.log(fourSum([0, -5, 5, 1, 1, 2, -5, 5, -3], -11)); // [[-5, -5, -3, 2]]
console.log(fourSum([0,1,5,0,1,5,5,-4], 11)); // [[-4,5,5,5],[0,1,5,5]]
console.log(fourSum([0,-1,0,1,-2,-5,3,5,0], 6)); // [[-2,0,3,5],[0,0,1,5]]
