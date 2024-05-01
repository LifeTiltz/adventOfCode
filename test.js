function fibonacciSeriesPrinter(number) {
  var fibonacciSeries = function* (number) {
    if (number === 0) {
      return [0];
    } else if (number === 1) {
      return [1, 1];
    } else {
      var values = fibonacciSeries(number - 1).next().value;
      values.push(values[values.length - 1] + values[values.length - 2]);
      yield values;
    }
  };
  console.log(fibonacciSeries(number).next().value);
  return fibonacciSeries(number).next().value;
}

//fibonacciSeriesPrinter(5);

function hasLowestVisionValueOfOne(number) {
  const digits = number.toString().split("").map(Number);
  let lowestVisionValue = Infinity;
  for (let i = 0; i < digits.length; i++) {
    const range = digits[i];
    let visionValue = 0;
    for (let j = i - range; j <= i + range; j++) {
      if (j >= 0 && j < digits.length) {
        visionValue += digits[j];
      }
    }
    if (digits[i] === 1 && visionValue < lowestVisionValue) {
      lowestVisionValue = visionValue;
    }
  }
  console.log(lowestVisionValue === Infinity ? false : true);
  return lowestVisionValue === Infinity ? false : true;
}

//hasLowestVisionValueOfOne(212);

const nums = [2, 3, 4, 10];
const target = 12;

function solution(nums, target) {
  let arr = {};
  for (let i = 0; i < nums.length; i++) {
    if (arr[target - nums[i]] == undefined) {
      arr[nums[i]] = i;
      console.log(arr[target - nums[i]], i, arr);
    } else {
      console.log("meeooww", arr[target - nums[i]], i);

      return;
    }
  }
  console.log("no such target in da array homeslice");
}

//solution(nums, target);

function treeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree1 = new treeNode(5);
//4  8
tree1.left = new treeNode(4);
tree1.left.left = new treeNode(12);
tree1.left.right = new treeNode(1);

tree1.right = new treeNode(8);
tree1.right.left = new treeNode(81);
tree1.right.right = new treeNode(1);

function findNumTree(tree, target) {
  if (tree.val == target) {
    console.log(true);
    return true;
  }
  if (tree.left == undefined) {
    console.log("left is undifeined");
  }
  console.log(tree.left.left.left, "3xL");
}

findNumTree(tree1, 5);
