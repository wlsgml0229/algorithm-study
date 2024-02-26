const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(file).toString().split("\n");

const solution = (input) => {
  const [K, N] = input[0].split(" ").map(Number);
  const lengthList = input.slice(1).map(Number);

  let min = 1;
  let max = Math.max(...lengthList);

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const pieces = lengthList
      .map((line) => parseInt(line / mid))
      .reduce((a, b) => a + b, 0);
    if (pieces >= N) min = mid + 1;
    else max = mid - 1;
  }

  console.log(max);
};

solution(input);
