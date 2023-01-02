const { enemyInput, ourInput } = require("../data/rockPaperScissorsData");

const dictionary = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

const mappedEnemyInput = enemyInput.map((input) => dictionary[input]);
const mappedOurInput = ourInput.map((input) => dictionary[input]);

const rockPaperScissors = () => {
  return;
};

console.log(rockPaperScissors());
