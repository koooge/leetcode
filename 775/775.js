const isIdealPermutation = A => {
	for (let i = 0; i < A.length - 2; ++i) {
		for (let j = i + 2; j < A.length; ++j) {
			if (A[i] > A[j]) return false;
		}
	}

	return true;
};

console.log(isIdealPermutation([1, 0, 2])); // true
console.log(isIdealPermutation([1, 2, 0])); // false
