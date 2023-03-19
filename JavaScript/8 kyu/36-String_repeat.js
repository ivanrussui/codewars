function repeatStr (n, s) {
    let res = s;
    for (let i = 1; i < n; i++) {
        res += s;
    }
    return res;
}

console.log(repeatStr(4, 'A'));