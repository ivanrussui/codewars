function countBy(x, n) {
    let z = [];
    let res = 0;
    for (let  i = 0; i < n; i++) {
        res += x;
        z.push(res);
    }
    return z;
}

console.log(countBy(1, 10)); // [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2, 5)); // [2,4,6,8,10]
