var myArgs = process.argv.slice(2);

let size = (myArgs[0] || 8),
    hashtag = false,
    alternate = false;

for (let i = 0; i < size; i++) {
  let str = "";

  for (let j = 0; j < size; j++) {
    if (alternate && size % 2 === 0) str += (!hashtag) ? "#" : " ";
    else str += (hashtag) ? "#" : " ";
    hashtag = !hashtag;
  }

  console.log(str);
  alternate = !alternate;
}

// Solution:
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);