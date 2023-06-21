const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const users = input.slice(1, n + 1);

const sortedUsers = users
  .map((user) => user.split(" "))
  .sort((a, b) => Number(a[0]) - Number(b[0]));

let answer = "";

for (let i = 0; i < sortedUsers.length; i++) {
  answer += sortedUsers[i].join(" ") + "\n";
}

console.log(answer);

//sort 는 원본 배열 변경
//======================

const [n, ...members] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(
  members
    .map((v) => ({ age: parseInt(v.split(" ")[0]), name: v.split(" ")[1] }))
    .sort((a, b) => a.age - b.age)
    .map((v) => String(v.age) + " " + v.name)
    .join("\n")
);
