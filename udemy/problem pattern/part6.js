// 분할과 정복 패턴
// Divide and Conquer

// 분할정복
// 배열이나 문자열 같은 큰 규모의 데이터셋을 처리
// 연결리스트나 트리가 될 수도 있다.
// 값을 찾기 위해 배열의 왼쪽엣 시작, 작은조각으로 세분하여 각조각을 어디로 이동시킬지 결정하는 작업
// 큰데이터덩어리를 작은 조각으로 나누는

//특정 숫자 찾기 (ex: 15)
//선형: 처음부터 15가있는지 확인
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
//이진탐색: 배열을 나누는데 정렬이 되어있으니까, 중간지점을 잡고 찾는값이 8보다 큰지 확인
// 왼쪽숫자는 모두 무시하고 오른쪽으로 가서 찾는다.
// 다음 숫자로 다시 중간값을 잡아서 15로 찾을수있다.
// 배열이 엄청 길어졌을경우는  분할정복이 더 빨라질수도있다.
function search(arr, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let cuurentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

[1, 2, 3, 4, 7, 8, 9, 15, 18, 29];
