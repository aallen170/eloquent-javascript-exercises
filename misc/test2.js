let max = 20;
let len = Math.ceil(Math.random() * max);

firstTen(giveArray(len));

// console.log(giveArray(len));

function firstTen(arr) {
	let i = 0;
	while(i < 10 && i < arr.length) {
		console.log(arr[i]);
		i++;
	}
}

function giveArray(length) {
  let arr = [];
  for (let i = 0; i < length; i++) arr.push(i);
  return arr;
}