const canWinNim = n => {
	return n <= 3 || n % 4 !== 0;
};

console.log(canWinNim(4)); // false
console.log(canWinNim(1)); // true
console.log(canWinNim(5)); // true
console.log(canWinNim(7)); // true
