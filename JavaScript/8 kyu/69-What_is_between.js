function between(a, b) {
  let res = [];
  for (; a <= b; a++) {
    res.push(a)
  }
  return res;
}

console.log(between(1, 4)) // [1, 2, 3, 4]
console.log(between(-2, 2)) // [1, 2, 3, 4]