const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...rest] = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n");

  let [length, target] = n.split(' ').map(Number)
  let arr = rest.split(' ').map(Number);

  let start = 1;
  let end = arr.reduce((a,b) => Math.max(a,b));
  let result = 0;
  while(start <= end) {
  let mid = parseInt((start + end)/2); 
  let total = 0;
  for(x of arr) {
      if(x > mid) {
        total += parseInt(x / mid);
      }
  }
  if(total < target) end = mid - 1; // 만들 수 있는 랜선수 부족한 경우 길이 줄이기
  else { // 만들 수 있는 갯수 충분 길이 늘리기
    result = mid; 
    start = mid + 1;
  }
}
console.log(result);

// 랜선 n 개이상 얻을 수 있는 길이의 최댓값 구하기
// 길이를 키우면 얻을수 있는 랜선수 감소
// 길이를 줄이면 얻을 수 있는 랜선수 증가

