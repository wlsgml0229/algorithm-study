// 팩토리얼 구현하기
// 4!
// 4 * 3 * 2 * 1

// for문 이용 비재귀적 솔루션
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
}

factorial(4);
