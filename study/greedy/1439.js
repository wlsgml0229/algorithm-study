const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [box, n, ...rest] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n");

const volume = box
  .split(" ")
  .map(Number)
  .reduce((a, b) => a * b);

//최소갯수 -> 큰거부터
let arr = rest.split(" ").map(Number);
for (let i = n - 1; i >= 0; i--) {
  //i 에다가 2 곱한 제곱수 만큼의 넓이를 빼줘
  let num = i * 2;
  let result = volume / (num * num * num);
  arr[i][1];
}
