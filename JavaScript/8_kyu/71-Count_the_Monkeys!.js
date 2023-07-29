function monkeyCount(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        res.push(i)
    }
    return res;
}

console.log(monkeyCount(5)); // [1, 2, 3, 4, 5]
console.log(monkeyCount(3)); // [1, 2, 3]
console.log(monkeyCount(9)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
