// First attempt:
// function range(start, end, step) {
//   let arr = [];

//   if (step < 0) {
//     while (start >= end) {
//       arr.push(start);
//       start += step;
//     }
//   } else if (step > 0) {
//     while (start <= end) {
//       arr.push(start);
//       start += step;
//     }
//   } else if (step === 0) return 'step cannot be 0';
//   else while (start <= end) arr.push(start++);
  
//   return arr;
// }
//--------------------

// Second attempt after looking at solution (notice the ternary for the 'step' var):
function range(start, end, step = (start < end) ? 1 : -1) {
  let arr = [];

  if (step < 0) {
    for (let i = start; i >= end; i += step) arr.push(i);
  } else if (step > 0) {
    for (let i = start; i <= end; i += step) arr.push(i);
  } else return 'step cannot be 0';
  
  return arr;
}
//--------------------

// First attempt:
// function sum(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) sum += arr[i];

//   return sum;
// }
//--------------------

// Second attempt (notice the for loop):
function sum(arr) {
  let sum = 0;

  for (let num of arr) sum += num;

  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
//--------------------

// Solution:
// function range(start, end, step = start < end ? 1 : -1) {
//   let array = [];

//   if (step > 0) {
//     for (let i = start; i <= end; i += step) array.push(i);
//   } else {
//     for (let i = start; i >= end; i += step) array.push(i);
//   }
//   return array;
// }

// function sum(array) {
//   let total = 0;
//   for (let value of array) {
//     total += value;
//   }
//   return total;
// }

// console.log(range(1, 10))
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55