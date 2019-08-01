const reverseWords = s => {
	return s.split(' ').map(str => str.split('').reverse().join('')).join(' ');
};

console.log(reverseWords(`Let's take LeetCode contest`)); // `s'teL ekat edoCteeL tsetnoc`
