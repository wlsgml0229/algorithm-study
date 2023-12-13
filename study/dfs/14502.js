
let [n, m] = input[0].split(' ').map(Number);

let data = [];
let temp = [];

for(let i =1; i <= n ; i++) {
    let line = input[i].split(' ').map(Number);
    data.push(line);
    temp.push( new Array(m).fill(0));
}
let dx = [-1,0,1,0];
let dy = [0,1,0,-1];

let result = 0;
function virus(x,y) {
    for(let i =0; i< 4; i++) {
        let nx = x+ dx[i];
        let ny = y+dy[i];
        if(nx <0 || nx > n || ny <0||ny > n) continue;
        if(temp[nx][ny] === 0) {
            temp[nx][ny] =2;
            virus(nx,ny)
        }
    }
}

// 안전영역 크기 계산 메서드
// 바이스러스 퍼진후에 점수 측정
function getScore() {
    let score = 0;
    for(let i=0; i<n; i++)
        for(let j=0; j<n;j++)
            if(temp[i][j] === 0) score++;
    return score
}

// 백트래킹 알고리즘
function dfs(count) {
    // 울타리 3개 설치시에 최대값 계산
    if(count===3) {
        for(let i =0; i < n; i++)
            for(let j=0; j< m; j++) {
                temp[i][j] = data[i][j];
            }
        for(let i = 0; i< n; i++) {
            for(let j=0; j<m; j++) {
                if(temp[i][j] === 2) virus(i,j);
                result = Math.max(result, getScore())
            }
        }
    }
    for(let i=0; i <n ; i++)
        for(let j= 0; j < m; j++)
            if(data[i][j] === 0){
                data[i][j] = 1; // 울타리 설치
                dfs(count +1); // 3개될때까지 재귀
                data[i][j] = 0; // 확인후 취소
            }
}

dfs(0);
console.log(result)