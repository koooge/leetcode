const isPowerOfThree = n => {
	return n.toString(3).replace(/0/g, '') === '1';
};

console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(9)); // true
console.log(isPowerOfThree(45)); // false
