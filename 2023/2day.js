const fs = require("fs");

const lines = fs
  .readFileSync("./rawData/2day.txt", { encoding: "utf-8" })
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

let sumOfGames = 0;

for (let i = 0; i < lines.length; i++) {
  const gameNumber = lines[i].split(":")[0].split(" ")[1];
  let data = lines[i].split(":")[1];
  let turns = data.split(";");
  let segments = data.split(" ");
  let isBigger = false;
  let rgb = [0, 0, 0];
  console.log("(rgb[0], +segments[j])");

  for (let j = 1; j < segments.length - 1; j++) {
    if (!isNaN(+segments[j])) {
      // if (+segments[j] >= 15) {
      //   isBigger = true;
      //   break;
      // }
      // if (+segments[j] == 14) {
      //   if (segments[j + 1][0] !== "b") {
      //     isBigger = true;
      //     break;
      //   }
      // }
      // if (+segments[j] == 13) {
      //   if (segments[j + 1][0] == "r") {
      //     isBigger = true;
      //     break;
      //   }
      // }
      if (segments[j + 1][0] == "r" && +segments[j] > rgb[0]) {
        rgb[0] = +segments[j];
        console.log((rgb[0], +segments[j]));
      }
      if (segments[j + 1][0] == "g" && +segments[j] > rgb[1]) {
        rgb[1] = +segments[j];
      }
      if (segments[j + 1][0] == "b" && +segments[j] > rgb[2]) {
        rgb[2] = +segments[j];
      }
    }

    if (j == segments.length - 2) {
      sumOfGames += rgb[0] * rgb[1] * rgb[2];
    }
  }
}

console.log(sumOfGames);
