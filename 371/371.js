const getSum = (a, b) => {
	let c;
	while ((c = a & b) != 0) {
		a ^= b;
		b = c << 1;
	}
	return a ^ b;
};

console.log(getSum(1, 2)); // 3
console.log(getSum(-2, 3)); // 1
