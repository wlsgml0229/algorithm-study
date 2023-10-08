const Queue = require('./Queue');

//초기위치에서 (N) 동생의 위치 (M) 에 도달하는 최단시간
// 모든순간이동(간선) 비용은 1 -> bfs로 최단시간을 계산

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require('fs').readFileSync(file).toString().split('\n');
console.log('input', input)

//시간 담는 배열 생성
const MAX = 100001;
let [n, k] = input[0].split(' ').map(Number);
let visited = new Array(MAX).fill(0); //0으로 초기화

function bfs() {
    let queue = new Queue();
    queue.enqueue(n);
    while(queue.getLength() !== 0) {
        let cur = queue.dequeue();
        if(cur === k) {
            //동생 위치 도착 > 최단 시간 반환
            return visited[cur];
        }
       for(let nxt of [cur -1, cur + 1, cur * 2]) {
        if(nxt < 0 || nxt >= MAX) continue;
        if(visited[nxt] === 0) {
            visited[nxt] = visited[cur] + 1;
            queue.enqueue(nxt)
        }
       }
    }
}

console.log(bfs())