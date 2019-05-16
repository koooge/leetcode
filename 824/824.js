const toGoatLatin = S => {
  const results = [];
  let a = 2;

  S.split(' ').forEach(str => {
    let result = '';
    if (['a', 'e', 'i', 'o', 'u'].includes(str[0].toLowerCase())) {
      result = str + 'm'; 
    } else {
      result = str.slice(1, str.length) + str[0] + 'm';
    }
    for (let i = 0; i < a; ++i) result += 'a';
    results.push(result);
    ++a;
  });

  return results.join(' ');
};

console.log(toGoatLatin('I speak Goat Latin')); // Imaa peaksmaa oatGmaaa atinLmaaaaa
console.log(toGoatLatin('The quick brown fox jumped over the lazy dog')); // heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa
