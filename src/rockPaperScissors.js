const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.resolve(__dirname, "../data/adventOfCode/day_2_input.txt"), "utf-8");

const dictionary = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

const rockPaperScissors = (text) => {
  const lines = text.split("\n");
  let result = 0;
  lines.forEach((line) => {
    const [opponent, myself] = line.split(" ");
    result += matchResult([opponent, myself]);
  });
  return result;
};

const matchResult = (answers) => {
  const opponent = dictionary[answers[0]];
  const myself = dictionary[answers[1]];

  // the return value is a sum of a figure we picked and an outcome of a match

  // rock has value 1
  // paper has value 2
  // scissors have value 3

  // win = 6, lose = 0, draw = 3

  // won matches
  if (opponent === "Rock" && myself === "Paper") return 8;
  if (opponent === "Paper" && myself === "Scissors") return 9;
  if (opponent === "Scissors" && myself === "Rock") return 7;

  // lost matches
  if (opponent === "Rock" && myself === "Scissors") return 3;
  if (opponent === "Paper" && myself === "Rock") return 1;
  if (opponent === "Scissors" && myself === "Paper") return 2;

  // draw matches
  if (opponent === myself && myself === "Scissors") return 6;
  if (opponent === myself && myself === "Paper") return 5;
  if (opponent === myself && myself === "Rock") return 4;
};

console.log(rockPaperScissors(input));
