
const fs = require("fs");

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

//   let answer = []

//   for (const key in whichOne) {
//     console.log("whichOne[key]", whichOne[key]);
//     console.log({key}, answer[key]);
//     answer[key-1] = whichOne[key].pop()
// }

// console.log({answer});

};
findEndState();
