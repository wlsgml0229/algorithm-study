let input = require("fs").readFileSync("/dev/stdin").toString();

let s = Number(input);
let sum = 0;
let current = 0;

while (sum <= s) {
  current += 1;
  sum += current;
}

console.log(current - 1);
