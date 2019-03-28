const countAndSay = (n) => {
	for (let i = 1, say = '1'; i <= n; ++i) {
		if (i === n) return say;
		let arr = [];
		for (let j = 0, k = 0; j < say.length; ++j) {
			arr[k] = arr[k] === undefined ? {val: say[j], num: 1} : {val: say[j], num: ++arr[k].num};
			if (say[j] !== say[j+1]) ++k;
		}
		let tmp = '';
		for (let j = 0; j < arr.length; ++j) {
			tmp += String(arr[j].num) + String(arr[j].val);
		}
		say = tmp;
	}
};

console.log(countAndSay(1)); // '1'
console.log(countAndSay(4)); // '1211'
console.log(countAndSay(6)); // '312211'
