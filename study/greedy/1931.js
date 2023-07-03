
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = require('fs').readFileSync(file).toString().trim().split('\n');

let answer = 0;
const times = arr
    .map((num) => num.split(' ').map((num) => +num))
    .sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });

let endTime = 0;
times.forEach((time) => {
    if (time[0] >= endTime) {
        answer++;
        endTime = time[1];
    }
});

console.log(answer);