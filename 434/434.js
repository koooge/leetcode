const countSegments = s => {
  const trimed = s.trim(); 
  if (trimed === '') return 0;
  return trimed.split(/\s+/).length;
};

console.log(countSegments('Hello, my name is John')); // 5
console.log(countSegments('')); // 0
console.log(countSegments('          ')); // 0
console.log(countSegments(', , , ,        a, eaefa')); // 6
