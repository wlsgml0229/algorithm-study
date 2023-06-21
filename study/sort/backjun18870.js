const number = require('fs').readFileSync("/dev/stdin").toString().split('\n');

// 공백 하나씩 분리해서 넘버타입 배열만들기
let arr = number[1].split(' ').map(Number);
//중복제거
let uniqueArr = [...new Set(arr)]
// [-10, -9, 2, 4]
uniqueArr.sort((a,b) => a - b);

let mapValue = new Map();
uniqueArr.forEach((item,idx) => {
    mapValue.set(item,idx);
})

let answer = '';
for (const x of arr) answer += mapValue.get(x) + " ";
console.log(answer);




