// 주어진 숫자만큼의 배열에 갯수로 적용해서 가장큰수 만들어내기

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return num;
  }
  let max = 0;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      console.log("i", i, "j", j);
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

// console.log(maxSubarraySum([1, 2, 3, 4, 5, 2, 1, 3, 7, 9], 2)); // 16
maxSubarraySum([2, 5, 8, 6, 4, 3, 2], 3); //19

//문제점 배열이 방대해질경우, 찾아야할숫자가 길어질 경우 등
// 20의 합계를 구하고 하나씩 이동하면서 20번씩 루프를진행

// 슬라이딩 윈도우 적용 - O(N)
// 배열전체에 루프는 한번만 돌아감 O(N)
//
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  // 앞의 3개를 더해주고
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    //앞의 숫자를 빼고 뒤의 숫자를 다시 더하면됨
    tempSum = tempSum - arr[i - num] + arr[i];

    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

[1, 2, 3, 4, 5, , 6, 4, 4, 1, 3, , 2, 3, 4, 3, 1];
