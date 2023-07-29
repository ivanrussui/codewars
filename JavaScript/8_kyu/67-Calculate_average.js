function findAverage(array) {
  // your code here
  if (array.length === 0) {
    return 0;
  }

  let res = 0
  for (let i = 0; i < array.length; i++) {
    res += array[i]
  }
  return res / array.length
}

console.log(findAverage([]))
console.log(findAverage([1, 1, 1]))
console.log(findAverage([1, 2, 3]))
console.log(findAverage([1, 2, 3, 4]))