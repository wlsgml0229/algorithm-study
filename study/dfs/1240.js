const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require('fs').readFileSync(file).toString().split('\n')

let [n,m] = input[0].split(' ').map(Number);
// 트리의 정보 입력
let graph = [];
for(let i = 1; i <= n; i++) graph[i] = [];
for(let i = 1; i < n; i++) {
    let [x,y, cost] = input[i].split(' ').map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
}

function dfs (x, dist) {
    if(visited[x]) return;
    visited[x] = true;
    distance[x] = dist;
    console.log('x', x)
    for(let [y,cost] of graph[x]) dfs(y, dist+ cost)
}

let distance;
let visited;
for (let i = 0; i < m; i++) {
    let [x, y] = input[n + i].split(' ').map(Number);
    visited = new Array(n + 1).fill(false)
    distance = new Array(n + 1).fill(-1);
    dfs(x, 0)
    console.log(distance[y])
}




