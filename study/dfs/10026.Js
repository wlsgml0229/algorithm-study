const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...rest] = require("fs").readFileSync(file).toString().split("\n");


// 상하 좌우 겹치는 구역이 있는가
let graph = [];
for(let i=1; i <=n; i++) graph.push(input[i].split(' '));
console.log('graph', graph);

let dx = [-1,1,0,0];
let dy = [0,0,-1,1];

function dfs(x, y) {
    if(!visited[x][y]) {
        visited[x][y] = true;
        for(let i=0; i< 4; i++) {
            let nx = x + dx[i];
            let ny = y+ dy[i];
            if(nx < 0 || ny <0 || nx >=n || ny >= n) continue; // 공간넘어가면 무시
            if(graph[x][y] === graph[nx][ny]) dfs(nx,ny); // 같은 색상이면 dfs 아니면 넘어감
        }
        return true
    }
    return false;
}


