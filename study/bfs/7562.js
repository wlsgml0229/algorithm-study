
const readFileHandler = require("../../common");
const Queue = require('./Queue');
// 모든 간선에 대한 가중치가 없음 -> bfs
const input = readFileHandler();
let testcase = Number(input[0]);

// 8가지의 움직일수 있는 방향 조건 정리
let dx = [-2,-2, -1, -1, 1, 1, 2, 2];
let dy = [-1, 1,-2, 2, -2, 2, -1, 1];
// 테스트 케이스가 사라질 때 까지 반복

let line = 1; // 몇번째 라인인지
while (testcase --) {
    let l = Number(input[line]); // lxl 좌표판
    let [x, y] = input[line + 1].split(' ').map(Number) // 현재 위치
    let [targetX, targetY] = input[line + 2].split(' ').map(Number) // 목표 위치
    let visited = [];
    for(let i =0; i<l; i++) visited.push(new Array(l).fill(0));
    queue = new Queue();
    queue.enqueue([x,y]);
    visited[x][y] = 1;
    while (queue.getLength() !==0) {
        let cur = queue.dequeue();
        x = cur[0];
        y = cur[1];
        for (let i =0; i <8; i++) {
            let nx = x  + dx[i];
            let ny = y + dy[i];
            if(nx < 0 || nx >= 1 || ny < 0 || ny >= 1) continue;
            if(visited[nx][ny] === 0) {
                visited[nx][ny] = visited[x][y] + 1;
                queue.enqueue([nx, ny]);
            }
        }
        line += 3;
        console.log(visited[targetX][targetY])
    }



}