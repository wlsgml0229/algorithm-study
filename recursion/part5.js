// 헬퍼 메소드 재귀 - 재귀적이지 않은 외부 함수가 재귀적인 내부함수를 호출하는 패턴

/** 팩토리얼은 스스로 재귀적인 구조를 가졌음
 *  헬퍼메소드는 외부는 개발자가 호출 -> 내부적으로 돌아가는 재귀
 *  보통 배열이나, 어떤 구조를 리턴해야할떄 쓰인다.
 *  함수안에서 다른 함수를 재귀적으로 호출하여 사용
 */

function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    // 종료조건 - 배열이 비어있다면 종료
    if (helperInput.length === 0) {
      return;
    }
    //첫번째 항목이 홀수이면 result push
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // 배열의 맨 앞을 잘라낸다.
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddValues([1, 3, 2, 4, 5, 6]));
