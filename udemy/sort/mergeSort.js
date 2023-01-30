// 병합 정렬
// 분할 정복 방식
// 잘개 쪼갠 것을 합치면서 정렬

//정렬된 배열두개를 합병시키는 방법 이해
// 배열이 정렬되어있다고 가정
//퀵은 피벗에 따라 최악의 경우 n*n
// 병합은 항상 n * log n 보장

//일단 반으로 쪼개고 나중에 합치는 순간 정렬
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr[i]) {
            result.push(arr[i]);
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    }
    return result;
}