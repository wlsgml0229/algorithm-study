const { setMaxIdleHTTPParsers } = require("http");

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, mid, m] = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n");

  let arr = mid.split(" ").map(Number);

  let start = 1; //이진탐색을 위한 시작점과 끝점 설정
  let end = arr.reduce((a,b) => Math.max(a,b));

  let result = 0;
  while(start <= end) {
    let mid = parseInt((start+ end) /2); // 중간점(상한액)
    let total = 0; // 배정된 예산의 총액
    for (x of arr) { // 지방에서 요청한 예산을 하나 씩 확인하여
      total += Math.min(mid, x); // 예산을 배정
    }
    if(total <= m) { // 조건 만족 -> 상한액(최대화 목표) 증가
      result = mid;
      start = mid+1;
    } else { // 만족하지 못하면 상한액 감소
      end = mid -1;
    }
  }
  console.log(result);
  // 최소값과 최댓값사이의 정수를 반씩 나눠가며 해결 