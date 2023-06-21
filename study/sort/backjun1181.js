const [n, ...words] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

//길이가 짧은것 부터, 길이가 같으면 사전순으로 정렬
Array.from(new Set(words))
    .sort((a, b) => a > b ? 1 : (a < b ? -1 : 0))
    .sort((a, b) => a.length - b.length)
    .forEach(i => console.log(i));