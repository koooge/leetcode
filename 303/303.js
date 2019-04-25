class NumArray {
	constructor(nums) {
		this.nums = nums;
	}

	sumRange(i, j) {
		return this.nums.slice(i, j + 1).reduce((a, b) => a + b);
	}
}

const a = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(a.sumRange(0, 2)); // 1
console.log(a.sumRange(2, 5)); // -1
console.log(a.sumRange(0, 5)); // -3
