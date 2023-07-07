const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, k] = require('fs').readFileSync(file).toString().trim().split(' ').map(Number);

// 모든갯수의 바구니에 1개씩은 들어가야함
// 가장많이 담긴 바구니와 적게담긴 바구니의 공의 개수 차이가 최소가 되려면 ? => 최대한 연속적이게 만들어야 한다.

const checkBasket = (n,k) => {
    // 최소 공 갯수
    const minBalls = (k * (k+1)) / 2;

    if(n < minBalls) {
        return -1;
    } else {
        n -= minBalls; // 최소 공갯수 만큼 뺴줌
        return n % k === 0 ? k - 1 :k;
    }
}

console.log(checkBasket(n,k));
