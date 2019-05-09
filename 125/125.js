const isPalindrome = s => {
	const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

	for (let i = 0, j = str.length - 1; i < j; ++i, --j) {
		if (str[i] !== str[j]) return false;
	}

	return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome('0P')); // false
