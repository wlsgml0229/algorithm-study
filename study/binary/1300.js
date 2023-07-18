const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, k] = require("fs").readFileSync(file).toString().split("\n");

let start = 1;
let end = 10 ** 10;
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += Math.min(mid / i, n);
  }
  if (total >= k) {
    result = mid;
    end = mid - 1;
  } else start = mid + 1;
}

console.log(result);
