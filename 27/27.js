const removeElement = (nums, val) => {
	let len = nums.length;
	for (let i = 0; i < len; ++i) {
		if (nums[i] === val) {
			nums.splice(i--, 1);
			--len;
		}
	}
	return nums.length;
};

const a = [3, 2, 2, 3];
removeElement(a, 3) // a = [2, 2]
console.log(a); // 2
const b = [0, 1, 2, 2, 3, 0, 4, 2];
removeElement(b, 2); // b = [0, 1, 4, 0, 3]
console.log(b); // 5
