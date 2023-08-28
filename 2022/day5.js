
const { log } = require("console");
const fs = require("fs");

const whichOne = {
  1: ["B", "W", "N"],
  2: ["L", "Z", "S", "P", "T", "D", "M", "B"],
  3: ["Q", "H", "Z", "W", "R"],
  4: ["W", "D", "V", "J", "Z", "R"],
  5: ["S", "H", "M", "B"],
  6: ["L", "G", "N", "J", "H", "V", "P", "B"],
  7: ["J", "Q", "Z", "F", "H", "D", "L", "S"],
  8: ["W", "S", "F", "J", "G", "Q", "B"],
  9: ["Z", "W", "M", "S", "C", "D", "J"],
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
  
  // for (let i = 0; i < lines.length; i++) {
  //   let line = lines[i]

  //   let broken = line.split(" ");
  //   const move = broken[1];
  //   const from = broken[3];
  //   const to = broken[5];

  //   for (let j = 0; j < move; j++) {
  //     let last = whichOne[from].at(-1);

  //     if (i >= i) {
  //       console.log("_____________");
  //       console.log({move, from, to, last, i});
  //       console.log(whichOne);
  //       console.log("- - -");
  //     }

  //     whichOne[to].push(last);
  //     whichOne[from].pop();

  //     if (i >= i) {
  //       console.log(whichOne);
  //       console.log("___________");
  //     }

  //   }
  //}

  console.log(whichOne);

  let answer = []
  let testt = ""

  for (const key in whichOne) {
    console.log("whichOne[key]", whichOne[key]);
    console.log({key}, answer[key]);
    answer[key-1] = whichOne[key].pop()
}

console.log({answer});


};
findEndState();
