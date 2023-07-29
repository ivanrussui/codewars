function arrayPlusArray(arr1, arr2) {
  const arr3 = [].concat(arr1, arr2);
  return arr3.reduce((a, b) => a + b);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));