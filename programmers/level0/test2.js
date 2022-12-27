/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120923?language=javascript
 * Q. 다음에 올 숫자
 *
 * */

function solution(num, total) {
  //초기값 구하고 배열을 만든다
  const min = Math.ceil(total / num - Math.floor(num / 2));
  return Array.from({ length: num }, (_, i) => i + min);
}

// Math.ceil - 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자 integer로 변환
// Array.from - Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듬
// Math.floor - 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환

function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min;
  });
}
