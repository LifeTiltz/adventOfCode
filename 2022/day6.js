let test1 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
let test2 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
let test3 = "nppdvjthqldpwncqszvftbrmjlhg";

function startOfPacket(DaString) {
  let fourInARow = 0;
  let lastNonRepeatingI = 0;

  for (let index = 0; index < DaString.length; index++) {
    let currentLetter = DaString[index];

    if (
      currentLetter !== DaString[index + 1] &&
      currentLetter !== DaString[index + 2] &&
      currentLetter !== DaString[index + 3]
    ) {
      if (index - 1 == lastNonRepeatingI) {
        lastNonRepeatingI = index;
      } else {
        fourInARow = 1;
      }
      ++fourInARow;
      if (fourInARow == 4) {
        console.log("yay we found the index we needed: ", index);
        return;
      }
    }
  }
  console.log({ lastNonRepeatingI });
}

startOfPacket(test1);
startOfPacket(test2);
startOfPacket(test3);
