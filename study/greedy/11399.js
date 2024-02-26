const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, arr] = require('fs').readFileSync(file).toString().trim().split('\n');


const sortedArr = arr.split(' ').map(Number).sort((a,b) =>  a-b);
let cnt = 0;
sortedArr.reduce((acc, cur) => {
    console.log(acc, cur)
    cnt += acc + cur;
    return acc + cur; // 현재 값을 누적값에 더하고 결과를 반환합니다

},0)

console.log(cnt)