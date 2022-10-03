// 알고리즘을 잘 이해하려면
// 1. 문제해결을 위한 계획을 수립 (문제접근)
// 2. 일반적인 문제 해결 패턴을 파악

// - 문제를 이해하는것
// - 문제 세분화
// - 해결, 단순화
// - 반복 및 수정

// 문제가 어떤 입력 값을 가지는지, 출력값을가지는지? 반환해야하는 정보 등,,

// 해당정보만 사용해서 에상하는 반환값이 나올지?

// 1. Can I restate the problem in my own words?
// "implement addition"

// 2. What are the inputs thath go into the problem?
// 아주 큰 숫자가 있을때, 제대로 반환할 수 있는지 -> 문제가 발생 Infitnity
// 자바스크립트에서는 기존 숫자방식으로 덧셈 불가

// 3. What are the outputs that should come from the solution to the problem?
// 정수, 부동소수점, 등등 어떤 값을 반환 해야하는지

// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to sovlve the problem?
// 만약 한숫자만 입력한다면?
// 0, undefined, null 등

// 5. How should I label the important pieces of data that are a part of the problem?
// 문제에 대한 라벨을 어떻게 정할지

// 문자의 수를 반환하는 함수 작성
charCount("aaaa"); // {a:4}

charCount("hello"); // {h:1, e:1, l:2, o:1}

("my phone number is 182763");
// 공백, 문자 , 기호 , 숫자 등 어떻게 해야될지?

("Hello hi");
// 대문자가 포함될 경우 어떻게 해야될지

charCount(""); // null, false , undefined
