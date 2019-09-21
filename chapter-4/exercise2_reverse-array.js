function reverseArray(arr) {
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) newArr.push(arr[i]);

  return newArr;
}

function reverseArrayInPlace(arr) {
  let p1 = 0; p2 = arr.length-1;

  while (p1 < p2) {
    let tmp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = tmp;
    p1++;
    p2--;
  }
  
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]