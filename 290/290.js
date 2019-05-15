const wordPattern = (pattern, str) => {
	let patterns = {};
	const strings = str.split(' ');

	if (pattern.length !== strings.length) return false;

	for (let i = 0; i < pattern.length; ++i) {
		if (!patterns[pattern[i]]) {
			if (Object.values(patterns).includes(strings[i])) return false;
			patterns[pattern[i]] = strings[i];
		} else {
			if (patterns[pattern[i]] !== strings[i]) return false;
		}
	}

	return true;
};

console.log(wordPattern('abba', 'dog cat cat dog')); // true
console.log(wordPattern('abba', 'dog cat cat fish')); // false
console.log(wordPattern('aaaa', 'dog cat cat dog')); // false
console.log(wordPattern('abba', 'dog dog dog dog')); // false
console.log(wordPattern('aaa', 'aa aa aa aa')); // false
