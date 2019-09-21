function isEven(x) {
  // if (x > 1) x -= 2;
  // else if (x < 0) return '??';
  // else return x === 0;
  
  // return isEven(x);

  return ((x -= 2) > 1) ? isEven(x) :
         (x < 0) ? '??' :
         x === 0;

  // console.log("called for " + x);

  // return (x === 1 || x === 0 || (x-=2) && isEven(x) || '??');
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Solution:
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false