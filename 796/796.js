const rotateString = (A, B) => {
	if (A.length !== B.length) return false;
	if (A.length === 0) return true;

	for (let i = 0; i < A.length; ++i) {
		if (A === B) return true;
		const c = A[0];
		A = A.slice(1);
		A += c;
	}

	return false;
};

console.log(rotateString('abcde', 'cdeab')); // true
console.log(rotateString('abcde', 'abced')); // false
console.log(rotateString('', 'a')); // false
console.log(rotateString('bbbacddceeb', 'ceebbbbacdd')); // true
console.log(rotateString('', '')); // true
