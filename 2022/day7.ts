const fs = require("fs");

function dFirstSeach(whichFile: string) {
  const lines = fs
    .readFileSync(`./rawData/${whichFile}.txt`, { encoding: "utf-8" })
    .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
    .trim() // Remove starting/ending whitespace
    .split("\n"); // Split on newline

  const cd = "$ cd";
  const ls = "$ ls";
  const dir = "dir ";
  // Lets first just log all the files in the order
  // they are in on the txt

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line[0] != "$") {
      console.log(line);
    }
  }

  // Create Function that
}

dFirstSeach("day7test");
