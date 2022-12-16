// 애너그램
// given two strings, write a function to determine if the second string is an anagram of the first
// 소문자에만 초점을 두는것이 아니라 공백, 대문자, 기호 등등 어떻게 해야할지도 고민

// 문제 풀기
function anagram(text1, text2) {
  // 매칭되지 않으면 버리기 꼭같아야 하므로
  if (text1.length !== text2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequecyCounter2 = {};
  for (let str of text1) {
    frequencyCounter1[str] = (frequencyCounter1[str] || 0) + 1;
  }
  console.log(frequencyCounter1);
  for (let str of text2) {
    frequecyCounter2[str] = (frequecyCounter2[str] || 0) + 1;
  }
  console.log(frequecyCounter2);
  for (res in frequencyCounter1) {
    if (!(res in frequecyCounter2)) {
      return false;
    }
    if (frequencyCounter1[res] !== frequecyCounter2[res]) {
      return false;
    }
    return true;
  }
}

let result = anagram("anan", "ssss");
console.log("res", result);

// 풀이
// 루프를 적용하여 만든 객체를 사용, 중첩되지 않은 두번쨰 루프를 사용해야지 시간을 단축
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log("lookup", lookup);
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    // 0이나타나면 falsy 값 이므로 어차피 false 반환
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

validAnagram("anagram", "nagaram");

// 여러데이터가 잇어서 서로 비교해야하는 경우
// 특히데이터가 같은 개별 데이터 조각으로 구성되어 있는지, 한 배열이 각 개별 데이터 조각을 제곱한 다른 배열과 같은지
// 또는 내가 본 다른 것과 같은지 확인하는 경우
// 숫자가 같은 숫자로만 구성 되어 있고 순서는 다른지 확인

// 풀이방법이 하나의 객체를 활용하여 좀 더 간결하게 풀 수 있었다.
