const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, rest] = require('fs').readFileSync(file).toString().trim().split('\n');

// 해당 높이에 존재하는 화살이 없을 경우 새로운 화살 사용 한다.

let data = rest.split(' ').map(Number);
let result = 0;
// 0 으로 채운 배열에 해당 인덱스에 화살이 있는 지 확인 후 없으면 화살 추가 있으면 화살 쓴다.
let arrow = new Array(1000001).fill(0);
for(let x of data) {
    if(arrow[x] > 0) {
        arrow[x] -= 1;
        arrow[x-1] += 1;
    }
    else {
        arrow[x-1] += 1;
        result += 1;
    }
}
console.log(result);
// [4,5,2,1,4]



