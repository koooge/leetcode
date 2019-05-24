const isPowerOfFour = num => {
	return /^1(00)*$/.test(num.toString(2));
};

console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(5)); // false
console.log(isPowerOfFour(-2147483648)); // false
