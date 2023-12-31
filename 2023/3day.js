const fs = require("fs");

const lines = fs
  .readFileSync("./rawData/3day-test.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

function findNumber(i, j, lines) {}

function findEngineParts(lines) {
  let sum = 0;
  for (let i = 0; i < lines.length; i++) {
    const row = lines[i];
    for (let j = 0; j < row.length; j++) {
      const element = row[j];
      if (element == "." || !isNaN(+element)) {
        continue;
      }
      if (!isNaN(lines[i - 1][j - 1])) {
        console.log(lines[i - 1][j - 1]);
        findNumber();
      }
    }
  }
}

findEngineParts(lines);
