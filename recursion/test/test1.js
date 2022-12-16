//1. Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
//   This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(n) {
  if (n <= 1) return 1;
  return n + recursiveRange(n - 1);
}
/**
 * 반복 , 또는 돌면서 한글자씩 저장되어야하고
 * 종료조건: 글자의 길이가 하나가 남으면 return
 * toUpperCase() 메서드는 문자열을 대문자로 변환
 */

function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUppercase()];
  }
  let res = capitalizeWords(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUppercase());
  return res;
}
