const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [T, ...rest] = require("fs").readFileSync(file).toString().split("\n");

function dfs(x, graph, visited, finished, result) {
  visited[x] = true;
  let y = graph[x]; //다음노드
  if (!visited[y]) {
    dfs(y, graph, visited, finished, result);
  } else if (!finished[y]) {
    //방문한적 있으면서, 처리완료되지않은경우s
    //x 와 y 값 같지않다면
    while (y !== x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true; //노드 꺼내짐
}

while (T--) {
  let n = rest.shift();
  let graph = [0, ...rest.shift().split(" ").map(Number)];
  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];

  for (let x = 1; x <= n; x++) {
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }
  console.log(n - result.length);
}
