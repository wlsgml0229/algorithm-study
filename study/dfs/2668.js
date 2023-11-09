const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...rest] = require("fs").readFileSync(file).toString().split("\n").map(Number);

// 사이클 판단
// visited, finished, result
function dfs (x, graph, visited, finished, result) {
    visited[x] = true;
    let y = graph[x]
    if(!visited[y]) {
        dfs(y, graph, visited,finished, result)
    } else if(!finished[y]) {
       while (y !== x) {
           result.push(y);
           y = graph[y];
       }
        result.push(x);
    }
    finished[x] = true; // 처리완료
}


let graph = [0, ...rest];
let visited = new Array(N+1).fill(false);
let finished = new Array(N + 1).fill(false);
let result = [];

for(let i=1; i <= N; i++) {
    if(!visited[i]) dfs(i, graph, visited,finished, result);
}
console.log(result.length);
result.sort((a,b) => a-b).forEach(element => console.log(element));




