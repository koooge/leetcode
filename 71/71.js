const simplifyPath = path => {
  let paths = path.split('/').filter(el => (el !== '' && el !== '.'));
  for (let i = 0; i < paths.length; ++i) {
    if (paths[i] === '..') {
      if (i === 0) {
        paths.splice(0, 1);
      } else {
        paths.splice(i-1, 2);
      }
      i -= 2;
    }
  }
  paths = paths.filter(el => el !== '');
  return `/${paths.join('/')}`;
};

console.log(simplifyPath('/home/')); // '/home'
console.log(simplifyPath('/../')); // '/'
console.log(simplifyPath('/home//foo/')); // '/home/foo'
console.log(simplifyPath('/a/./b/../../c/')); // '/c'
console.log(simplifyPath('/a/../../b/../c//.//')); // '/c'
console.log(simplifyPath('/a//b////c/d//././/..')); // '/a/b/c'
