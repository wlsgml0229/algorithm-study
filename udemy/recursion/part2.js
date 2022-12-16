// 스택
// 대부분의 프로그래밍 언어에서 보이지 않는 곳에서 함수 호출을 관리하는 일종의 데이터 구조가 있다.
// 호출된 함수는 다른 함수가 반환 될 때 까지 기다리는 경우가 많다.
// 자바스크립트에서는 호출스택이 그걸 담당하는 데이터구조이다.

// 스택과 큐
// push , pop ( 선입선출)

function takeShower() {
  return "Showering";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!!");
}

wakeUp();

// 함수가 완료되면 호출 스택 아래로 밀려나서 제거된다.

// 그러나 재귀함수의 경우에는 계속해서 새로운 함수를 호출 스택에 추가한다.
// 사실은 동일한 함수를 계속 추가하는 거고 추가된 함수는 호출을 기다림
// 하지만 어느지점에서는 종료되야함
// 언제종료되는지 어떻게 알수있을지에대해서

// 호출스택은 자바스크립트의 보이지 않는 곳에서 작동하는 정적 데이터 구조이다.

// 꼭대기에서 추가 꼭대기에서 제거
