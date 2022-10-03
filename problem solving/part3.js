// 문제 세분화

function charCount(str) {
  // make object to return at end
  // loop over string for each character...
  //if the char is a number/letter AND a key in obect, add one to count
  // if the char is a number/ letter AND not in object, add it and set value to 1
  // if character is something else (space, period, etc.) don't do anything
  //return object at end
}

// 1. 문제이해를 거쳐 경계값 입력값, 출력값
// 2. 해결방법에서는 철저하게 단계를 생각해내면 됨
// 3. 해결하거나, 단순화 하기

// 해결할수 없다면 더 단순한 문제를 해결해야함 (잠깐 막힌 어려운 부분을 무시하고 단순한 해결책을 작성한 다음 다시 어려운부분을 가능하다면 통합)
// 코드를 작성하기도 전에 문제를 한 곳에 몰아서 모든 문제를 해결하려 하면 문제의 어려운 부분에 막힐 수 있다.

function charCount(str) {
  // make object to return at end
  let result = {};
  // loop over string for each character...

  // * 공백과 대소문자 구별 부분 건너뛰고 for 루프를 돌려서 각각의 문자가 있는지 확인후 갯수 추가하는 로직 작성
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    //if the char is a number/letter AND a key in obect, add one to count
    if (result[char] > 0) {
      result[char]++;
      // if the char is a number/ letter AND not in object, add it and set value to 1
    } else {
    }
    result[char] = 1;
  }

  // if character is something else (space, period, etc.) don't do anything
  //return object at end
  return result;
}

// 나머지부분 처리
// 영문자가 아닌 글자의 처리는?
// 1. 모든 유효한 문자 포함하는 배열정의 -> 성가신 방법
// 2. 정규표현식 사용
// 3. 아스키코드 사용 등

function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    // 대문자를 소문자로 변경하는 코드 추가
    let char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
    }
    result[char] = 1;
  }

  return result;
}

// 코드를 볼떄 효율성이 중요함
// 면접상황에서는 이에관한 질문을 완벽히 던지는게 중요함
// 이상적이지 않은 부분에 더 나은 방법을 적용할수있을텐데 검색을 해봐야겠다는 생각을 가질 수 있음
