//import fs from "fs";
const fs = require("fs");

const containmentChecker = () => {
  const data = fs.readFileSync("./rawData/day4.txt", "utf8");
  //const data = fs.readFileSync("./rawData/day4test.txt", "utf8");

  const pairsList = data.split("\r\n");

  let HowManyPairs = 0;

  for (let i = 0; i < pairsList.length; i++) {
    const pairs = pairsList[i];

    const pair = pairs.split(",");
    const first = pair[0].split("-").map(Number);
    const sec = pair[1].split("-").map(Number);

    if (first[0] == first[1] && sec[0] == sec[1]) {
      ++HowManyPairs;
    } else if (first[0] == first[1]) {
      if (first[0] >= sec[0] && first[0] <= sec[1]) {
        ++HowManyPairs;
      }
    } else if (sec[0] == sec[1]) {
      if (sec[0] >= first[0] && sec[0] <= first[1]) {
        ++HowManyPairs;
      }
    } else if (first[0] <= sec[0]) {
      if (first[1] >= sec[1]) {
        ++HowManyPairs;
      }
      //console.log({ first, sec }, Number(first[0]), sec[0]);
    } else if (first[0] >= sec[0]) {
      if (first[1] <= sec[1]) {
        ++HowManyPairs;
      }
    }
  }
  console.log(HowManyPairs);
};

//containmentChecker();

const containTester = () => {
  const data = fs.readFileSync("./rawData/day4.txt", "utf8");

  const groups = data.split("\r\n");

  let answer = 0;

  const shit = groups.map((group) => {
    const [left, right] = group
      .split(",")
      .map((sides) => sides.split("-").map(Number))
      .sort((a, b) => {
        if (a[0] == b[0]) {
          return a[1] - b[1];
        }
        return a[0] - b[0];
      });

    const twoIsContained = left[0] <= right[0] && left[1] >= right[1];

    return twoIsContained ? 1 : 0;

    // if (left[0] == left[1] && right[0] == right[1]) {
    //   ++answer;
    // } else if (left[0] == left[1]) {
    //   if (left[0] >= right[0] && left[0] <= right[1]) {
    //     ++answer;
    //   }
    // } else if (right[0] == right[1]) {
    //   if (right[0] >= left[0] && right[0] <= left[1]) {
    //     ++answer;
    //   }
    // } else if (left[1] > right[1]) {
    //   ++answer;
    // } else if (left[0] == right[0]) {
    //   if (left[1] < right[1]) {
    //     ++answer;
    //   }
    // }
    //return 0;
  });

  const meow = shit.reduce((a, b) => a + b);
  console.log(meow);
};

//containTester();
const lines = fs
  .readFileSync("./rawData/day4.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

function part1() {
  const res = lines.map((line) => {
    const [interval1, interval2] = line
      .split(",")
      .map((interval) => interval.split("-").map(Number))
      .sort((a, b) => {
        const oneSize = a[1] - a[0];
        const twoSize = b[1] - b[0];
        return twoSize - oneSize;
      });

    const oneFullContainsTwo =
      interval1[0] <= interval2[0] && interval1[1] >= interval2[1];

    return oneFullContainsTwo ? 1 : 0;
  });
  console.log(res.reduce((a, b) => a + b, 0));
}

part1();
