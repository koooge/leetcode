const plusOne = (digits) => {
	digits[digits.length - 1] += 1;

	for (let i = digits.length - 1; i >= 0; --i) {
		if (digits[i] === 10) {
			digits[i] = 0;
			if (i !== 0) {
				digits[i - 1] += 1;
			} else {
				digits.unshift(1);
			}
		}
	}

	return digits;
};

console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([9])); // [1, 0]
