// let a =
// `
// [B]             [B] [S]
// [M]             [P] [L] [B] [J]
// [D]     [R]     [V] [D] [Q] [D]
// [T] [R] [Z]     [H] [H] [G] [C]
// [P] [W] [J] [B] [J] [F] [J] [S]
// [N] [S] [Z] [V] [M] [N] [Z] [F] [M]
// [W] [Z] [H] [D] [H] [G] [Q] [S] [W]
// [B] [L] [Q] [W] [S] [L] [J] [W] [Z]
// 1   2   3   4   5   6   7   8   9`

// [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3
const fs = require("fs");

let egy = ["z", "n"];
let ketto = ["m", "c", "d"];
let harom = ["p"];

const whichOne = {
  1: ["B", "W", "N", "P", "T", "D", "M", "B"],
  2: ["L", "Z", "S", "W", "R"],
  3: ["Q", "H", "Z", "J", "Z", "R"],
  4: ["W", "D", "V", "B"],
  5: ["S", "H", "M", "J", "H", "V", "P", "B"],
  6: ["L", "G", "N", "F", "H", "D", "L", "S"],
  7: ["J", "Q", "Z", "J", "G", "Q", "B"],
  8: ["W", "S", "F", "S", "C", "D", "J"],
  9: ["Z", "W", "M"],
};

// const whichOne = {
//   1: "one",
//   2: "two",
//   3: "three",
//   4: "four",
//   5: "five",
//   6: "six",
//   7: "seven",
//   8: "eight",
//   9: "nine",
// };

const whichOneTest = {
  1: ["z", "n"],
  2: ["m", "c", "d"],
  3: ["p"],
};

const findEndState = () => {
  const lines = fs
    .readFileSync("./rawData/day5.txt", { encoding: "utf-8" })
    .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
    .trim() // Remove starting/ending whitespace
    .split("\n"); // Split on newline

  lines.map((line) => {
    let broken = line.split(" ");
    const move = broken[1];
    const from = broken[3];
    const to = broken[5];

    for (let i = 0; i < move; i++) {
      let last = whichOne[from].at(-1);
      whichOne[to].push(last);
      whichOne[from].pop();
    }
  });

  console.log(whichOne);
};
findEndState();
