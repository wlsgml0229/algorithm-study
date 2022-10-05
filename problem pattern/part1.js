function smae(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let coorectIndex = arr.indexOf(arr1[i] ** 2);
    if (coorectIndex === -1) {
      return false;
    }
    arr2.splice(coorectIndex, 1);
  }
  return true;
}

smae([1, 2, 3, 2], [9, 1, 4, 4]);

// O(n^2) //순진한 접근법
// 중첩된 루프는 사용하지 않는게좋다.

// O(n) 시간
// 대략 3n 의 시간이 걸리며 위의 방법보다는 낫다.
function same1(arr1, arr2) {
  if (arr.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequecyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequecyCounter2[val] = (frequecyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequecyCounter2)) {
      return false;
    }
    if (frequecyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
    return true;
  }
}

// 빈도 카운터의 개념은 보통 객체를 사용
// 객체를 사용하여 프로파일을 구성하는 것은 배열이나 문자열의 내용을 분석하는 방법으로 보통 배열이나 문자열과 같은 선형구조를 구성하는것

// 해당 분석을 문자열이나 배열에서 생성된 다른 객체의 형태와 신속하게 분석 할 수 있다.
// 따라서 두개의 배열을 객체로 세분화하여 각 배열의 요소들을 분류한다음, 각 배열을 비교 할 수 있다.
