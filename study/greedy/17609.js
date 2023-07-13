const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...words] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n");

//투포인터 체크 + 계속해서 확인 나머지 같으면 true 아니면 false
function check(word, left, right) {
  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
}

function solution(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else {
      if (check(word, left + 1, right) || check(word, left, right - 1)) {
        return 1;
      }
      return 2;
    }
  }
  return 0;
}

const result = [];

for (const word of words) result.push(solution(word));
console.log(result.join("\n"));
