const isUgly = num => {
	if (num <= 0) return false;

	while (num > 1) {
		if (Number.isInteger(num / 2)) {
			num /= 2;
		} else if (Number.isInteger(num / 3)) {
			num /= 3;
		} else if (Number.isInteger(num / 5)) {
			num /= 5;
		} else {
			return false;
		}
	}

	return true;
};

console.log(isUgly(6)); // true
console.log(isUgly(8)); // true
console.log(isUgly(14)); // false
console.log(isUgly(-2147483648)); // false
console.log(isUgly(0)); // false
