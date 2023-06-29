let [n,dist, cost] =  require('fs').readFileSync('/dev/stdin').toString().split('\n');

dist = dist.split(' ').map(Number);
cost = cost.split(' ').map(Number);

let minCost = cost[0];
for(let i=0; i<n; i++) {
    minCost = Math.min(minCost, cost[i]);
    cost[i] = minCost;
}

// 큰 숫자 BigInt로 정의
let answer = BigInt(0);
for(let j=0; j < n; j++) {
   answer += BigInt(dist[i]) * BigInt(cost[i]);
}

console.log(answer);

