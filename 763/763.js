const partitionLabels = S => {
  const result = [];

  while (S.length > 0) {
    const c = S[0];
    let lastIndex = S.lastIndexOf(c);

    for (let i = 0; i < lastIndex; ++i) {
      lastIndex = Math.max(lastIndex, S.lastIndexOf(S[i]));
    }
    result.push(lastIndex + 1);
    S = S.slice(lastIndex + 1);
  }

  return result;
};

console.log(partitionLabels('ababcbacadefegdehijhklij')); // [9, 7, 8]
