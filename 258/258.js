const addDigits = num => {
	let result = num;

	while (result / 10 >= 1) {
		result = String(result).split('').reduce((acc, cur) => Number(acc) + Number(cur));
	}

	return result;
};

console.log(addDigits(38)); // 2
console.log(addDigits(10)); // 1
