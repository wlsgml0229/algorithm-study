// 팩토리얼 구현하기
// 4!
// 4 * 3 * 2 * 1

// for문 이용 비재귀적 솔루션
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

factorial(4);

function factorial(num) {
  // 1 이되면 종료 0을 곱하기전에
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

factorial(5);
