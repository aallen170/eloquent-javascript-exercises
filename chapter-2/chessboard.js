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