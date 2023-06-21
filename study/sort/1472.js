let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let n = input[0];
//빈도수 담을 배열
let cnt = Array(10).fill(0);

for (let x of n) {
  cnt[Number(x)]++;
}

let answer = "";
//9에서 0까지
for (let i = 0; i >= 0; i--) {
  for (let j = 0; j < cnt[i]; j++) answer += i + "";
}
console.log(answer);

// ==============
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

function sort(number) {
  let answer = "";
  // 숫자로 변환(매개변수를 문자로 변환 -> 쪼개기 -> 내림차순 정렬 -> 합치기)
  answer = Number(
    number
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

  return answer;
}

console.log(sort(input));
