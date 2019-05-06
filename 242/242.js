const isAnagram = (s, t) => {
	const ts = s.split('');

	for (let i = 0; i < s.length; ++i) {
		const index = t.indexOf(s[i]);
		if (index === -1) return false;
		ts.splice(index);
	};

	return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('a', 'ab')); // false
