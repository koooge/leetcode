const groupAnagrams = strs => {
	let anagrams = {};

	strs.forEach(str => {
		const s = str.split('').sort().join('');

		if (!anagrams[s]) {
			anagrams[s] = [str];
		} else {
			anagrams[s].push(str);
		}
	});

	return Object.values(anagrams);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["ate","eat","tea"], ["nat","tan"], ["bat"]]
