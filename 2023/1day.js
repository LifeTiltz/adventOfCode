const fs = require("fs");

const lines = fs
  .readFileSync("./rawData/day1.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

// let answer2;
// for (let i = 0; i < lines.length; i++) {
//   let firstNum = undefined;
//   let lastNum = undefined;
//   let both = undefined;

//   for (let j = 0; j < lines[i].length; j++) {
//     //console.log(isNaN(lines[i][j]), lines[i][j]);

//     if (!isNaN(lines[i][j]) && !firstNum) {
//       firstNum = lines[i][j];
//     }
//     if (!isNaN(lines[i][j])) {
//       lastNum = lines[i][j];
//     }
//     both = firstNum + lastNum;
//   }
//   //console.log({ firstNum, lastNum, both });
//   answer2 += Number(both);
// }
//console.log(answer2);

const stringNumbers = {
  on: ["one", "1"],
  tw: ["two", "2"],
  th: ["three", "3"],
  fo: ["four", "4"],
  fi: ["five", "5"],
  si: ["six", "6"],
  se: ["seven", "7"],
  ei: ["eight", "8"],
  ni: ["nine", "9"],
};

let answer = 0;

for (let i = 0; i < lines.length; i++) {
  let firstNum = undefined;
  let lastNum = undefined;
  let currentSum;
  for (let j = 0; j < lines[i].length; j++) {
    if (!isNaN(lines[i][j])) {
      lastNum = lines[i][j];
      if (!isNaN(lines[i][j]) && !firstNum) {
        firstNum = lines[i][j];
      }
      continue;
    }

    if (j == lines[i].length - 1) {
      continue;
    }
    let currTwo = lines[i][j] + lines[i][j + 1];

    if (stringNumbers[currTwo]) {
      let isThisTheWordNum = lines[i].slice(
        j,
        stringNumbers[currTwo][0].length + j
      );

      //console.log(stringNumbers[currTwo], { isThisTheWordNum, i, currTwo });
      if (stringNumbers[currTwo][0] == isThisTheWordNum) {
        if (!firstNum) {
          firstNum = stringNumbers[currTwo][1];
        } else {
          lastNum = stringNumbers[currTwo][1];
        }
      }
    }
  }
  currentSum = firstNum + lastNum;

  answer += Number(currentSum);
  console.log(answer);
}
