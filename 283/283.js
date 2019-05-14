const moveZeroes = nums => {
	nums.sort((a, b) => a > b);

	while(nums[0] === 0) {
		nums.shift();
		nums.push(0);
	}
};

const a = [0, 1, 0, 3, 12];
moveZeroes(a);
console.log(a); // [1, 3, 12, 0, 0]

const b = [0];
moveZeroes(b);
console.log(b); // [0]
