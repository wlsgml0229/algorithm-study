let input = require("fs").readFileSync("/dev/stdin").toString();
// https://www.acmicpc.net/problem/1541
//숫자 - 기준으로 배열 생성 후 내부 요소는 덧셈
// 첫번째 말고 나머지는 - 요소로 더함
let answer = 0;
input.split("-").forEach((el, idx) => {
  let cur = el
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (idx === 0) answer += cur;
  else answer -= cur;
});
console.log(answer);
