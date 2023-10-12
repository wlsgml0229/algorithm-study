const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m] = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n");

  let [length, target] = n.split(' ').map(Number)
  let arr = m.split(' ').map(Number);

  let start = 1;
  let end = arr.reduce((a,b) => Math.max(a,b));
  let result = 0;
  while(start <= end) {
  let mid = parseInt((start + end)/2); 
  let total = 0;
    for(x of arr) {
      if(x > mid) {
        total += x - mid;
      }
  }
  // 목표하는 나무 양 보다 부족하면 더 많이 자르기
  if(total < target) end = mid - 1;
  else { // 나무의 양이 충분하면 덜 자르기 
    result = mid; // 최대한 덜 잘랐을때가 정답이므로 result에 기록
    start = mid + 1;
  }
}
console.log(result);

// 나무 최대갯수 