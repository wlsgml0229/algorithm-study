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
