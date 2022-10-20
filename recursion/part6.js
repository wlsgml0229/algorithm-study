// 순수 재귀
// 외부데이터 구조를 사용 x

function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // 기존의 newArr 을 합쳐서 새로반환된 값을 계속 추가
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// collectOddValues([1,2,3,4])
// 실행되는 순서
// [1].concat(collectOddValues([2,3,4]))
//         [].concat(collectOddValues([3,4]))
//           [3].concat(collectOddValues([4]))
//                 [].concat(collectOddValues([]))
//                       newArr 반환 []

// 마지막에 빈배열 종료문에 걸려 newArr 반환되면 차레로 스택에 기다리고 있었던 concat 작업들이 수행되면서
// 최종으로 배열 [1,3] 값을 만들어낸다.

/**
 * Tip
 * 배열을 사용하고 헬퍼메소드 없이 순수재귀 솔루션을 작성하는 경우에,
 * 배열을 복사하는 slice, spread 연산자, concat 같은 메소드를 사용 할 수 있다. 그러면 배열을 변경할 필요가 없다.
 * 문자열은 변경 할 수가 없다. slice, substr, or subString 을 이용해 사본을 만들어야 한다.
 * 객체는 Object.assign 이나 spread 연산자를 사용하는 것이 유용하다.
 */
