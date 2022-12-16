// BigO
// 정식으로 입력된 내용이 늘어날 수록 알고리즘에 실행 시간이 어떻게 변하는지 설명하는 공식적인 방식
// 입력크기와 실행시간 사이의 관계를 의미함

//실행 시간의 차이가 거의 없다.
// O(1) 으로 표기 - 상수
// n 값이 커질수록 아무런 변화가 없다.
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

// 여러 연산이 있었음
// 실행 비율이 1:1 궁극적으로 N의 영향
// O(n)

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// 빅오 찾기
// n이 늘어날 수록 루프안에 연산이 있다.
//처음 for문 O(n)
// 거꾸로하는 작업 O(n)

// 두개가 있는걸 신경쓰지않고 결론은 O(n) 이 된다.
function countUpAndDown(n) {
  console.log("Going up!");
  // O(n)
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top! \n Going down ....");
  // O(n)
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("back down. Bye!!!");
}

// for문이 중첩 되어 있을 경우
// O(n) 연산안에 O(n) 이 있으면 O(n제곱) 이된다.
function printAllParis(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
