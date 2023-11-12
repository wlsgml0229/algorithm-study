const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...rest] = require("fs").readFileSync(file).toString().split("\n");


// 상하 좌우 겹치는 구역이 있는가
let graph = [];
rest.forEach(el => graph.push(el.split(' ')))
console.log('graph', graph);

// 상,하, 좌, 우  좌표  선언
const dx = [-1,1,0,0];
const dy = [0,0,-1,1];

function dfs(x, y) {
    if(!visited[x][y]) {
        visited[x][y] = true;
        for(let i=0; i< 4; i++) {
            let nx = x + dx[i];
            let ny = y+ dy[i];
            if(nx < 0 || ny < 0 || nx >=n || ny >= n) continue; // 공간넘어가면 무시
            if(graph[x][y] === graph[nx][ny]) dfs(nx,ny); // 같은 색상이면 dfs 아니면 넘어감
        }
        return true
    }
    return false;
}

let result1 = 0;
let visited = [];
for(let i =0; i <n; i++) visited.push(new Array(n).fill(false));
for(let i =0; i < n; i++) {
    for(let j=0; j<n; j++) {
        if(dfs(i,j))result1 ++;
    }
}


