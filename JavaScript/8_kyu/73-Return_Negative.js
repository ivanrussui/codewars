function makeNegative(num) {
    if (num > 0) return -num;
    return num;
}

console.log(makeNegative(42)); // -42
console.log(makeNegative(0)); // 0
console.log(makeNegative(0.12)); // -0.12