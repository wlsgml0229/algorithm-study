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
