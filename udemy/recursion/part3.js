// 재귀함수의 두가지 기본 요소
// 1. 라인을 끝내는 종료조건
// 2. 재귀가 중단 되는 시점

// 기본적으로 재귀호출을 사용하면 게속 같은 함수를 호출
// 심플 재귀

function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

// print3
// countDown(2);
// print 2
// countDown(1)
// pring 1
// countDown(0);
// Alldone
// 조건문이 있어서 무한루프를 돌지 않게 됨

// function countDown(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log("All done");
// }

// countDown(5);

// 종료조건이 보이는지?
// 종료조건에는 대부분 무언가를 찾기위한 조건이 붙고 return 하게 된다.
// 매번 더 작은 값을 가지고 호출하게 된다.
function sumRange(num) {
  //1과 1사이의 숫자는 1
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(3);
// return 3 + sumRange(2)
//             return 2 + sumRange(1)
//                         return 1

// 더이상 재귀호출이 끝나게된다.
// 뒤에서 리턴된 1부터 다시 점차적으로 return 을 반복하며 최종적으로
// return 3 + 3 이 된다.
// 숫자가 커지면 커질 수록 스택에 훨씬 더 많은 함수 호출이 쌓이기 떄문에 조심해야된다.
// 다음 더해질 값을 위해 기다리고있음
