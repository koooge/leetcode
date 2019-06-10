const diStringMatch = S => {
	const result = new Array(S.length + 1);

	result[0] = 0;
	for (let i = 0; i < S.length; ++i) {
		result[i+1] = result[i];
		if (S[i] === 'I') {
			++result[i+1];
		}
		for (let j = 0; j < i + 1; ++j) {
			if (result[j] >= result[i+1]) ++result[j];
		}
	}

	return result;
};

console.log(diStringMatch('IDID')); // [0, 4, 1, 3, 2]
console.log(diStringMatch('III')); // [0, 1, 2, 3]
console.log(diStringMatch('DDI')); // [3, 2, 0, 1]
