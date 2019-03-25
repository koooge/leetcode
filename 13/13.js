const romanToInt = (s) => {
	let ans = 0;

	for (let i = 0; i < s.length; ++i) {
		switch(s[i]) {
		case 'I':
			switch(s[i+1]) {
			case 'V':
				ans += 4;
				++i;
				break;
			case 'X':
				ans += 9;
				++i;
				break;
			default:
				ans += 1;
				break;
			}
			break;
		case 'V':
			ans += 5;
			break;
		case 'X':
			switch(s[i+1]) {
			case 'L':
				ans += 40;
				++i;
				break;
			case 'C':
				ans += 90;
				++i;
				break;
			default:
				ans += 10;
				break;
			}
			break;
		case 'L':
			ans += 50;
			break;
		case 'C':
			switch(s[i+1]) {
			case 'D':
				ans += 400;
				++i;
				break;
			case 'M':
				ans += 900;
				++i;
				break;
			default:
				ans += 1000;
				break;
			}
			break;
		case 'D':
			ans += 500;
			break;
		case 'M':
			ans += 1000;
			break;
		default:
			break;
		}
	}

	return ans;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
console.log(romanToInt('DCXXI')); // 621
