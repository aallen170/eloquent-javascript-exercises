function min(x, y) {
  return (x < y) ? x : y;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
//--------------------

// Solution:
// function min(a, b) {
//   if (a < b) return a;
//   else return b;
// }

// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10