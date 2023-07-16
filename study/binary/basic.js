// 정렬된 배열에서 특정한 값을 가지는 원소 갯수 구하기


function lowerBound(arr, target, start, end) {
    while(start < end) {
        let mid = parseInt((start + end )/2);
        if(arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
}

function upperBound(arr, target, start, end) {
    while(start < end) {
        let mid = parseInt((start + end )/2);
        if(arr[mid] > target) end = mid;
        else start = mid + 1;
    }
} 