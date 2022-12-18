/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120924
 * Q.다음에 올 숫자
 *  등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
 */

function solution(common) {
  if (common[2] - common[1] === common[1] - common[0]) {
    return common.pop() + common[1] - [0];
  } else {
    return common.pop() * (common[1] / common[0]);
  }
}
