const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, M] = require("fs")
    .readFileSync(file)
    .toString()
    .split(" ").map(Number);

let result = '';
let arr = [];
let visited = new Array(N).fill(false);


function backtracking(start, count) {
    if(count === M) {
        result += arr.join(' ')
        return ;
    }
    for (let i = start; i < N; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        arr.push(i+1);
        backtracking(count+ 1);
        visited[i] = false;
        arr.pop();
    }
}