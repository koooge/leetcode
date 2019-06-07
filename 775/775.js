const isIdealPermutation = A => {
	let global = local = 0;

	for (let i = 0; i < A.length - 1; ++i) {
		for (let j = i + 1; j < A.length; ++j) {
			if (A[i] > A[j]) ++global;
		}
		if (A[i] > A[i+1]) ++local;
	}

	return global === local;
};

console.log(isIdealPermutation([1, 0, 2])); // true
console.log(isIdealPermutation([1, 2, 0])); // false
