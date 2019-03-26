const OPENERS = ['(', '{', '['];

const isExpected = (o, c) => {
	if (!o) {
		return OPENERS.includes(c);
	} else if (o === '(') {
		return OPENERS.includes(c) || (c === ')');
	} else if (o === '{') {
		return OPENERS.includes(c) || (c === '}');
	} else if (o === '[') {
		return OPENERS.includes(c) || (c === ']');
	}

	return false;
};

const isValid = (s) => {
	let stack = [];
	for (let i = 0; i < s.length; ++i) {
		if (!isExpected(stack.slice(-1)[0], s[i])) return false;
		if (OPENERS.includes(s[i])) {
			stack.push(s[i]);
		} else {
			stack.pop();
		}
	}

	return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
console.log(isValid('[')); // false
