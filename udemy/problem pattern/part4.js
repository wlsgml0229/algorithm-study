function countUniqueValues(arr) {
    var i = 0;
    for(j = 1; j <arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    console.log(i,j);
}
i
[1,2,3,3,4,5,6,6,7,]