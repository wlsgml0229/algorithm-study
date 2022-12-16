// Objects

//정렬 되어있지 않은 데이터구조 (모두 key, value 짝을 갖고 저장되어있다)
let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// 객체의 특징 ( 빅오 표기 관점 )
// 1. 객체는 정렬되어 있을 필요가 없을때 잘 작동
// 2. 빠른접근, 입려과 제거를 원할때 좋다.
// 3. 정렬되어있지않지만 다른것은 빠르다. 빠르다고 했을때 입력, 접근, 제거가 상수시간이다.

// 자바스크립트가 어떤 정보를 객체안에 상수시간으로 저장하고, 불러올때도 상수시간으로 , 바꿀때도 상수시간으로  작업하게 된다.
// 매우 빠르다.
// 어디에 새로운 객체를 입력하던지 상관이없다, (객체의 시작, 중간, 끝) -> 모두 상수시간으로 빠르기 때문

// insertion - O(1)
// removal - O(1)
// Searching - O(n)  탐색만 n시간걸림
// Access - O(1)

// 탐색 - 어떤 특정 정보가 잠재적으로 모든아이템의 속성을 확인해야 되기때문에 n시간 걸리게 됨

// Obect.keys - O(n)
Object.keys(instructor);
console.log(instructor);
// [ 'firstName', 'isInstructor', 'favoriteNumbers']
// 배열이 늘어날수록 배열에 추가해야하는 시간도 늘어나기 때문에 O(n)

// Object.values - O(n)
// Object.entries - O(n)
// hasOwnProperty - O(1)

instructor.hasOwnProperty("firstName");
//hasOwnProperty 는 좀 다른 이유?
// firstName 이라는 속성을 전달하면 있는지 없는지만 알려줌
// 상수시간인이유?
// -> firstName 이라는 키가 있고 그 값을 원하면 상수시간으로 접근이 가능하기 떄문
// 똑같은 시간안에 키가 존재하는지 알수있다.
//객체는 모든것을 빨리 처리하지만 정렬되어있지 않다.

// 배열이 빠를수도있지만 정렬된것 때문에 더 느려지루솓 있다.
