function range(start, end, step) {
  let arr = [];

  if (step < 0) {
    while (start >= end) {
      arr.push(start);
      start += step;
    }
  } else if (step > 0) {
    while (start <= end) {
      arr.push(start);
      start += step;
    }
  } else if (step === 0) return 'step cannot be 0';
  else while (start <= end) arr.push(start++);
  
  return arr;
}

function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55