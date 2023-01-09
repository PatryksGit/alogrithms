//TODO: complete tasks from adventofcode.com

const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.resolve(__dirname, "../data/adventOfCode/day_1_input.txt"), "utf-8");

function groupNumbers(text) {
  const lines = text.split("\n");
  const groups = [];
  let currentGroup = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length === 0) {
      groups.push(currentGroup);
      currentGroup = [];
    } else {
      currentGroup.push(parseInt(lines[i]));
    }
  }
  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }
  return groups;
}

const calorieCountig = () => {
  const input = groupNumbers(data);
  let result = 0;
  input.forEach((arr) => {
    const value = arr.reduce((total, value) => total + value, 0);
    if (value > result) {
      result = value;
    }
  });
  return result;
};

console.log(calorieCountig());
