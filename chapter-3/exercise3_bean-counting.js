function countBs(str) {
  let numOfBs = 0;

  for (let i = 0; i < str.length; i++)
    numOfBs += (str[i] === "B") ? 1 : 0;

  return numOfBs;
}

function countChar(str, target) {
  let numOfBs = 0;

  for (let i = 0; i < str.length; i++)
    numOfBs += (str[i] === target) ? 1 : 0;

  return numOfBs;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
//--------------------

// Solution:
