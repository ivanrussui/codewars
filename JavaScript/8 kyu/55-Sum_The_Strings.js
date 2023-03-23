function sumStr(a, b) {
    if (!a) {
        a = '0';
    }
    if (!b) {
        b = '0';
    }
    const parsedSum = parseInt(a) + parseInt(b);
    return parsedSum.toString();
}

console.log(sumStr('2', '2'));