

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, m] = require("fs")
  .readFileSync(file)
  .toString()
  .split(" ")
  .map(Number);

let result = ''
let visited = new Array(n).fill(false);
let selected = []

function dfs(depth, start) {
    // 깊이가 m이 되었을때
    if (depth === m) {
        result += `${selected.join(' ')}\n`
        return;
    }

    for (let i = start; i < n; i++) {
        // 중복이 없으니 방문한것은 포함하지 않음
        if (visited[i]) continue;
        visited[i] = true;
        selected.push(i + 1);
        dfs(depth + 1, i);
        selected.pop();
        visited[i] = false;
    }

}

dfs(0, 0)
console.log(result)
