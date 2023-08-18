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
const fs = require("fs")

let egy = ["z","n"]
let ketto = ["m","c","d"]
let harom = ["p"]

let one = ["B","W","N","P","T","D","M","B"]
let two = ["L","Z","S","W","R"]
let three = ["Q","H","Z","J","Z","R"]
let four = ["W","D","V","B"]
let five = ["S","H","M","J","H","V","P","B"]
let six = ["L","G","N","F","H","D","L","S"]
let seven = ["J","Q","Z","J","G","Q","B"]
let eight = ["W","S","F","S","C","D","J"]
let nine = ["Z","W","M"]

const whichOne = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine"
}

const whichOneTest = {
    "1": ["z","n"],
    "2": ["m","c","d"],
    "3": ["p"],
}

const findEndState = () => {
    const lines = fs.readFileSync("day5test.txt", { encoding: "utf-8" })
    .split("\n")

    lines.map((line) => {
        let broken = line.split(" ")
        const move = broken[1]
        const from = broken[3]
        const to = broken[5]

        for (let i = 0; i < move; i++) {
            let last = whichOneTest[from].at(-1)
            console.log(whichOneTest[to]);
            whichOneTest[to].push(last)
            console.log(last,whichOneTest[to]);

            whichOneTest[from].pop()
        }
    })

    console.log(whichOneTest);
}
findEndState()