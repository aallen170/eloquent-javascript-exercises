for (let i = 1; i <= 100; i++) {
  let str = "";

  if (i % 3 === 0) str += "Fizz";
  if (i % 5 === 0) str += "Buzz";
  
  console.log(str || i);
}
//--------------------

// Solution:
// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }