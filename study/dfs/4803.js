

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(file)
    .toString()
    .split("\n")

let line = 0;
let testCase = 1;
let graph = [];
let visited = [];
let cnt = 0;

function isCycle(x, prev) {
    visited[x] = true; // 현재 노드 방문
    for(let y of graph[x]) { // y는 다음노드(인접노드)
        if(!visited[y]) { // 다음 노드 방문 x
            if(isCycle(y,x)) return true; // 사이클 발생
        }
        else  if(y !== prev) return true; // 방문 한적 있는 노드인데, 직전노드가 아니라면 (무방향)
    }
    return false;
}


while (true) {
    let [n, m] = input[line].split(' ').map(Number);
    if( n=== 0 && m ===0)  break;
    for ( let i = 1; i <= n; i ++) graph[i] = [];
    for(let i =1; i <= m; i++) {
        let [x,y] = input[line + i].split(' ').map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }
    visited = new Array(n + 1).fill(false);
    for(let i = 1; i<=n;i ++) {
        if(!visited[i]) {
            if(!isCycle(i,0)) cnt++;
        }
    }

}