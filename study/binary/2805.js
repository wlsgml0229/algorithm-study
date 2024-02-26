const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m] = require("fs").readFileSync(file).toString().split("\n");

let arr = m.split(" ").map(Number);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  for (let x of arr) if (x > mid) result += x - mid;
  if (result < m) end = mid - 1;
  else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);

// 나무 최대갯수
