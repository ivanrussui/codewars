function sumMul(n, m){
    if (n > 0 && m > 0) {

        let res = 0;

        for (let i = n; i < m; i++) {
            if (i % n === 0) {
                res += i;
            }
        }
        return res;
    }
    return 'INVALID';
}

console.log(sumMul(0,0)) // "INVALID"
console.log(sumMul(2,9)) // "20"
console.log(sumMul(4,-7)) // "INVALID"
console.log(sumMul(3, 13)) // "30"
