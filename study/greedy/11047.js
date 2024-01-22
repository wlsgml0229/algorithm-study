// 동전은 N종류 , 각각 동전을 많이 가지고있다.
// 동전을 적절히 사용해서 가치의 합을 K로 만드려고한다.
// 동전개수의 최솟값을 구하여라
// 각 화폐의 단위는 서로 배수이기 떄문에 가치가큰 화폐단위는 가치가 작은 화폐단위의 합으로 만들어지는게 가능하기떄문에
// 단순히 가장동전을적게 쓰려면 큰겂부터 사용

const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [first, ...arr] = require('fs').readFileSync(file).toString().trim().split('\n');
const coins = arr.map(Number)
let [N,K] = first.split(' ').map(Number);
let count = 0;
arr.sort((a,b) => b-a);
for (let item of coins) {
    if(K/item) return;
    count += K/item;
    K %= item;
}

console.log(count)