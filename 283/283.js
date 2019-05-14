const moveZeroes = nums => {
	for (let i = nums.length; i >= 0; --i) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			nums.push(0);
		}
	}
};

const a = [0, 1, 0, 3, 12];
moveZeroes(a);
console.log(a); // [1, 3, 12, 0, 0]

const b = [0];
moveZeroes(b);
console.log(b); // [0]

const c = [0, 0, 1];
moveZeroes(c);
console.log(c); // [1, 0, 0]
