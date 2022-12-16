function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// console.log(addUpTo(100))

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

// console.log(addUpTo2(100))

// 1. 뭐가 더 빠른지?
// 2. 적은 메모리를 쓰는지?
// 3. 가독성이 좋은지

//시간 계산
let t1 = performance.now();
addUpTo2(10000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// 2번째 방법이 훨씬 더 시간이 짧게걸린다.
// 수동으로 타이밍을 구하고 비교하는 것이 좋은방법이 아님!
// 불확실한 부분이 있다. ( 기기마다 다른 시간을 기록, 속도 측정 정확도가 떨어짐)
// 어느 코드가 더 좋을지 평가 할 수있을까?

// 이럴때 빅오 표기법을 사용한다
// 코드가 실행될때 걸리는 정확한 시간을 초로 계산하는거 보다 컴퓨터가 처리해야하는 연산 갯수를 센다. (불변)
// 컴퓨터의 사양과 상관없이 시간은 항상 연산의 갯수에 따라 측정할 수 있게 된다.

//아래 코드에서 곱셈, 덧셈, 나눗셈이 존재한다.
//연산을 3번 해야하는 것 숫자 n과는 상관없이!
// 시간의 차이가 거의없다.

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

//루프가 있기 때문에 달라진다. 숫자가 5면 5번의 연산이 더 추가, 호출하는 인수의 수만큼 연산이 늘어나게 된다.
// 전체적인 큰 그림이 중요하다.
// N이 커질수록 연산이 늘어나게된다. (시간이 늘어나게 된다.)
// 1대1 비율로 선형으로 늘어나게됨

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

//하나하나 세는게 중요한게 아니라 연산의 갯수가 비례적으로 늘어난다에 초점을 둔다.
