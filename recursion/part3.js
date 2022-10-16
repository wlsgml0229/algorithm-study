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
