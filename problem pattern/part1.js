function smae(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let coorectIndex = arr.indexOf(arr[i] ** 2);
    if (coorectIndex === -1) {
      return false;
    }
    arr2.splice(coorectIndex, 1);
  }
  return true;
}

[1, 2, 3], [9, 1, 4, 4];
