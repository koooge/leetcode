class NumArray {
	constructor(nums) {
		this.sums = [];
		let sum = 0;
		for (let i = 0; i < nums.length; ++i) {
			sum += nums[i];
			this.sums[i] = sum;
		}
	}

	sumRange(i, j) {
		return this.sums[j] - (i > 0 ? this.sums[i - 1] : 0);
	}
}

const a = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(a.sumRange(0, 2)); // 1
console.log(a.sumRange(2, 5)); // -1
console.log(a.sumRange(0, 5)); // -3
