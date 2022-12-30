function solution(food) {
  food.reverse().reduce((arr, cur, idx) => {
    const calorie = (food.length - idx - 1).toString();
    const repeatedFood = calorie.repeat(parseInt(cur / 2));
    return repeatedFood + acc + repeatedFood;
  });
}
