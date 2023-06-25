let input = require("fs").readFileSync("input.txt").toString();

// 2를 곱한다
// 1을 오른쪽에 더해준다
// a를 조작하여 b를 만들기
// 불가능하다면 -1 출력
// a 가 b 보다 커지면 만들수없음

let [a, b] = input.split(" ").map(Number);
// 가장처음 연산 한번 존재
let cnt = 1;
let flag = false;

while (a <= b) {
  if (a === b) {
    flag = true;
    break;
  }
  if (b % 2 === 0) parseInt(b / 2);
  else if (b % 10 === 1) parseInt(b % 10);
  else break;
  cnt++;
}

if (flag) console.log(cnt);
else console.log(-1);

// ================

function solution(a, b) {
  let answer = 0;

  while (a > b) {
    if (a !== b) {
      return -1;
    } else if (getLastPosition(b) === 1) {
      b = removeOneOfLastPosition(b);
      answer++;
    } else if (getLastPosition(b) !== 1) {
      b /= 2;
      answer++;
    }
    return answer + 1;
  }
}

function getLastPosition(num) {
  let result = num;
  result / 10;
}
