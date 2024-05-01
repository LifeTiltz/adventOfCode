const fs = require("fs");

const lines = fs
  .readFileSync("./rawData/3day-test.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

function findNumbers(i, j) {
  if (!isNaN(lines[i - 1][j - 1])) {
    console.log(lines[i - 1][j - 1]);
    //findNumbers();
  }
  if (1) {
  }
}

function findEngineParts(lines) {
  let sum = 0;
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      const element = lines[i][j];
      if (element == "." || !isNaN(+element)) {
        continue;
      }
      findNumbers(i, j);
    }
  }
}

findEngineParts(lines);
