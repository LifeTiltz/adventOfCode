const fs = require("fs");

function dFirstSeach(whichFile) {
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
    console.log(line);
  }

  // Create Function that adds the data to an Object?Array?
}
// day7test or day7
dFirstSeach("day7test");

//Learn how to copy an object and add to it while recreating it
const root = {};

function objBuilder(object, currPath, parent, children, size) {
  let temp = {};
}

objBuilder(root, ["/"], null, [a, d], 23352670);

console.log(root);
