// function countBs(str) {
//   let numOfBs = 0;

//   for (let i = 0; i < str.length; i++)
//     numOfBs += (str[i] === "B") ? 1 : 0;

//   return numOfBs;
// }

function countChar(str, target) {
  let numOfChars = 0;

  for (let i = 0; i < str.length; i++)
    numOfChars += (str[i] === target) ? 1 : 0;

  return numOfChars;
}

function countBs(str) {
  return countChar(str, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
//--------------------

// Solution:
// function countChar(string, ch) {
//   let counted = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == ch) {
//       counted += 1;
//     }
//   }
//   return counted;
// }

// function countBs(string) {
//   return countChar(string, "B");
// }

// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4