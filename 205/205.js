const isIsomorphic = (s, t) => {
	let dict = {};

	for (let i = 0; i < s.length; ++i) {
		if (dict[s[i]]) {
			if (dict[s[i]] !== t[i]) return false;
		} else if (Object.values(dict).includes(t[i])) {
			return false;
		} else {
			dict[s[i]] = t[i];
		}
	}

	return true;
};

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('ab', 'aa')); // false
