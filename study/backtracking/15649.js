const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m] = require("fs")
  .readFileSync(file)
  .toString()
  .split(" ")
  .map(Number);

// n이 주어졌을때 1부터 n까지 이루어진 순열을 사전 순으로 출력
// n 값 최대 8 최대 경우의 수 8!

// 방문했는지 안했는지 확인, 이미 방문한 항목은 포함 하지 않는다.
let result = "";
const output = [];
const visited = new Array(n).fill(false);

function dfs(count) {
  // 원하는 만큼 뽑았다면
  if (count === m) {
    result += `${output.join(" ")}\n`;
    return;
  }
  // 원하는 만큼 뽑기전
  for (let i = 0; i < n; i++) {
    // 이미 방문했다면 패스
    if (visited[i] === true) continue;

    visited[i] = true;
    output.push(i + 1);
    console.log(i);
    // 재귀 호출
    dfs(count + 1);
    output.pop();
    visited[i] = false;
  }
  return result;
}

console.log(dfs(0));
