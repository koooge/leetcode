const thirdMax = nums => {
	let first = second = third = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] > first) {
			third = second;
			second = first;
			first = nums[i];
		} else if (nums[i] !== first && nums[i] > second) {
			third = second;
			second = nums[i];
		} else if (nums[i] !== first && nums[i] !== second && nums[i] > third) {
			third = nums[i];
		}
	}

	return third !== Number.MIN_SAFE_INTEGER ? third : Math.max(...nums);
};

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([1, 1, 2])); // 2
console.log(thirdMax([5, 2, 2])); // 5
console.log(thirdMax([1, 2, 2, 5, 3, 5])); // 2
