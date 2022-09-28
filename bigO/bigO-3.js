// 빅오 규칙 알아보기

//대략적인 큰그림
//상수를 버리면 단순화된 것을 비교할 수 있다.

// 주목 할점은 n이 커지는것에 집중해야함
// n이 커질수록 연산이커짐 => O(n)

function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

//n이 커져도 최대 5까지만 for문이 돌아간다. n이 큰 영향을 받지않음 => 상수 O(1)
function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// 실행속도를 비교 => 시간복잡도

// 공간복잡도
// 입력이 커질수록 알고리즘에 얼마나 많은 공간을 차지하는가?
// 사용되는 메모리에 집중한다.

// n이 커질수록 무한대까지 가면서 공간을 차지한다.
// 알고리즘자체가 중요하다.
// 보조공간 복잡도 - 입력되는것을 제외하고 알고리즘 자체가 필요로 하는 공간을 의미한다.

//Most primitives (booleans, numbers, undefined, null ) are constant space -> 모두 불변공간
// 입력의 크기와 상관없이 숫자가 1이든 1000이든 모두 불변공간이라고 여긴다.
// stirng은 다르다. 만약 50자이면 문자열은 길이가 1자인 문자열보다 50배 더 많은 공간을 차지하게 될것이다.O(n)
// 배열 또는 오브젝트도 마찬가지 O(n)

//공간을 차지하는것에 집중 해보면,
// total 이라는 변수, 두번쨰 배정 i 모두 숫자 입력의 크기가 차지하는 공간과는 아무 상관이 없음 O(1)
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

//값을 2배로 돌려주는 함수
// 배열의 크기가 늘어나서 무한대에 가까워질수록 공간이 어떻게 되는가?
// 어떤한 상황에도 새로운 배열을 만들어낸다.
// 입력의 배열의 길이가 10이면 새로운 배열에도 똑같이 아이템 10개가 반환됨 (n에따라 공간의 크기가 달라지게됨)
// O(n)
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
