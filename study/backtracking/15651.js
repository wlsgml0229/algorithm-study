

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m] = require("fs")
  .readFileSync(file)
  .toString()
  .split(" ")
  .map(Number);

  // 중복순열 -> 중복이 되어도 되니까 기존코드에서 visited만 제거 해 주면됨 
let result = ''
let selected = []

function dfs(depth, start) {
    // 깊이가 m이 되었을때
    if (depth === m) {
        result += `${selected.join(' ')}\n`
        return;
    }

    for (let i = start; i < n; i++) {
        selected.push(i + 1);
        dfs(depth + 1, i);
        selected.pop();

    }

}

dfs(0, 0)
console.log(result)
