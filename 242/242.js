const isAnagram = (s, t) => {
	const ts = t.split('');

	for (let i = 0; i < s.length; ++i) {
		const index = ts.indexOf(s[i]);
		if (index === -1) return false;
		ts.splice(index, 1);
	};

	return ts.length === 0;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('a', 'ab')); // false
