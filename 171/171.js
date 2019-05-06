const titleToNumber = s => {
	let result = 0;

	const alphabet = '-ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	for (let i = s.length - 1, digit = 1; i >= 0; --i, digit *= 26) {
		result += alphabet.indexOf(s[i]) * digit;
	}

	return result;
};

console.log(titleToNumber('A')); // 1
console.log(titleToNumber('AB')); // 28
