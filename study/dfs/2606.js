const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n , m, ...rest] = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")

  // n - 정점의 갯수 m - 간선의 갯수

  let graph = [];
  // 그래프 그리기위한 기본작업
  for(let i = 1; i<=n; i++) graph[i] = [];
  console.log(graph)
  for(let i = 2; i <= m + 1; i++) {
    let [x,y] = rest[i].split(' ').map(Number)
    console.log(x,y)
    graph[x].push(y);
    graph[y].push(x);
  }
  console.log(graph)

  let cnt = 0;
  let visited = new Array(n + 1).fill(false)

  function dfs(x) {
    visited[x] = true;
    cnt ++;
    for(y of graph[x]) {
        if(!visited[y])dfs(y);
    }
  }

  dfs(1);
  console.log(cnt -1);