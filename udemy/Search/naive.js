// 긴문자열에 짧은문자열이 포함되어있는지 확인
// 나이브문자열
function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("haha omg somg", "omg"));

// 맞는지 확인후 문자열 빠져나오기
