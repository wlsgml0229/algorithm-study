let input = require("fs").readFileSync("/dev/stdin").toString();

// 3을 빼면서 5로 나눠질때 까지 반복
let n = Number(input);
let cnt = 0;
// 제대로 나누어떨어지지 않는 경우 확인
let flag = false;

while (n >= 0) {
  //더이상 반복 할 수 없을때 까지 반복
  // n 이 0 이 되었거나, 나누어떨어지는 값인 경우
  if (n === 0 || n % 5 === 0) {
    cnt += parseInt(n / 5);
    console.log(cnt);
    flag = true;
    break;
  }
  n -= 3;
  cnt += 1;
}

if (!flag) {
  console.log(-1);
}
