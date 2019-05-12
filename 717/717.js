const isOneBitCharacter = bits => {
  let isMidCharacter = false;
  for(let i = 0; i < bits.length - 1; i++) {
    isMidCharacter = (bits[i] === 1 && !isMidCharacter)
  }
  return !isMidCharacter;
};

console.log(isOneBitCharacter([1, 0, 0])); // true
console.log(isOneBitCharacter([1, 1, 1, 0])); // false
console.log(isOneBitCharacter([0, 0])); // true
