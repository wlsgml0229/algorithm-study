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

/**
 *  재귀 - 통상적인 실수
 *  1. 종료조건이 없는경우 !! -> 계속해서 스택에 추가되어 멈추게된다.
 *  2. 잘못된 값을 반환하는 경우 -> 반환값이 이상해서 계산이 멈추지 않음
 *  Stack overflow
 */
