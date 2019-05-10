const canConstruct = (ransomNote, magazine) => {
	const m = magazine.split('');

	for (let i = 0; i < ransomNote.length; ++i) {
		const bullet = m.indexOf(ransomNote[i]);
		if (bullet === -1) return false;
		m.splice(bullet, 1);
	}

	return true;
};

console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
