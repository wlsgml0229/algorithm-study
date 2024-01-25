let input = require("fs").readFileSync("/dev/stdin").toString();

// 설탕 봉지 갯수
let cnt = 0;

input = Number(input);

while (true) {
    if (input < 0) {
        console.log(-1);
        break;
    }
    if (input === 0 || input % 5 === 0) {
        // 나눈 몫 더하기
        cnt += parseInt(input / 5);
        console.log(cnt);
        break;
    }
    input -= 3;
    cnt++;
}