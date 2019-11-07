const reorderLogFiles = logs => {
	const lets = [], digs = [];

	logs.forEach(log => {
		if (/[0-9]+/.test(log.split(' ')[1])) {
			digs.push(log);
		} else {
			lets.unshift(log);
			lets.sort((a, b) => {
				const _a = a.split(' ').slice(1);
				const _b = b.split(' ').slice(1);
				for (let i = 0; i < Math.max(_a.length, _b.length); ++i) {
					if (_a[i] < _b[i]) {
						return -1;
					} else if (_a[i] > _b[i]) {
						return 1;
					}
				}
				return 0;
			});
		}
	});

	return [...lets, ...digs];
};

console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])); // ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"])); // ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
console.log(reorderLogFiles(["j mo", "5 m w", "g 07", "o 2 0", "t q h"])); // ["j mo","5 m w","t q h","g 07","o 2 0"]
