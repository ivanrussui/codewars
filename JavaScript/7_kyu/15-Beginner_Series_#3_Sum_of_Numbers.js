function getSum(a, b) {
    if (a === b) {
        return a;
    }

    let sum = 0;
    if (a < b) {
        for (a; a <= b; a++) {
            sum += a;
        }
    } else {
        for (b; a >= b; a--) {
            sum += a;
        }
    }
    return sum;
}

function getSum2(a, b) {
    const start = Math.min(a, b); // -1
    const end = Math.max(a, b); // 0

    return ((end - start + 1) * (start + end)) / 2;
}

console.log('getSum');
console.log((getSum(0, -1))); // -1
console.log((getSum(0, 1))); // 1
console.log((getSum(2, 2))); // 2
console.log((getSum(5, -1))); // 14
console.log((getSum(-50, 0))); // -1275
console.log((getSum(-181, 335))); // 39809

console.log('getSum2');
console.log((getSum2(0, -1))); // -1
console.log((getSum2(0, 1))); // 1
console.log((getSum2(2, 2))); // 2
console.log((getSum2(5, -1))); // 14
console.log((getSum2(-50, 0))); // -1275
console.log((getSum2(-181, 335))); // 39809