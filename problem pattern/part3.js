// 다중포인터

// 공식이름이 아님!
// 이 패턴의 개념은 인덱스나 위치에 해당하는 포인터나 값을 만든 다음 특정 조건에 따라 중간 지점에서 부터 시작지점이나 끝지점이나 양쪽지점을 향해가는것

// 한쌍의 조건을 찾는다.
// 어느 방향이든 상관없이 두개의 포인터를 찾는것이 특징

// [-3,-2,-1,0,1,2,3] // [-3,3]
// [-2,0,1,3] // undefined

// Time Complexity - O(N^2)
// Space Complexity  - O(1)

// 첫번째 숫자를 제외한 나머지 숫자에 루프를 돌려 첫번째 숫자를 더했을때 0 이 되는 수를 찾음
// 0이 되는 일치값이 없으면 1만큼 이동하여 찾는다

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

let result = sumZero([-3, -2, -1, 0, 1, 2, 3]);
console.log(result);

//리팩토링하여 다중포인터 사용
// Time Complexity - O(N)
// Space Complexity  - O(1)

function sumZeroRefactoring(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// 정렬되어있는 배열임을 알고있기때문에 투포인터를 사용하여 리팩토링이 가능
// 만약 일치하는 쌍이 없으면 undefind 반환
// while(left <right) 가적용되어야 제대로 undefind
console.log(sumZeroRefactoring([-4, -3, -2, 0, 1, 1, 5, 10]));
