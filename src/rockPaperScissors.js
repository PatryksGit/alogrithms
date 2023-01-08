const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.resolve(__dirname, "../data/adventOfCode/day_2_input.txt")).toString();

const dictionary = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

const transformData = (text) => {
  const lines = text.split("\n");
  const array = [];
  for (let i = 0; i < lines.length; i++) {
    array.push([lines[i].split(" ")[0], lines[i].split(" ")[1]]);
  }
  return array;
};

const matchResult = (answers) => {
  const opponent = dictionary[answers[0]];
  const myself = dictionary[answers[1]];

  if (opponent === "Rock" && myself === "Scissors") return 3;
  if (opponent === "Rock" && myself === "Paper") return 8;

  if (opponent === "Paper" && myself === "Rock") return 1;
  if (opponent === "Paper" && myself === "Scissors") return 9;

  if (opponent === "Scissors" && myself === "Paper") return 2;
  if (opponent === "Scissors" && myself === "Rock") return 7;

  if (opponent === myself && myself === "Scissors") return 6;
  if (opponent === myself && myself === "Paper") return 5;
  if (opponent === myself && myself === "Rock") return 4;
};

const rockPaperScissors = () => {
  const data = transformData(input);
  let result = 0;
  data.map((fight) => {
    result += matchResult(fight);
  });
  return result;
};

console.log(rockPaperScissors());
