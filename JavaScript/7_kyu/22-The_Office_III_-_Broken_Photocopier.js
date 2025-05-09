function broken(x) {
    return x.split('').reduce((acc, char) => {
        if (char === '0') {
            acc += '1';
        } else if (char === '1') {
            acc += '0';
        }
        return acc;
    }, '');
}

const broken2 = x => x.split('').reduce((acc, char) => char === '0' ? acc += '1' : acc += '0', '');

console.log(broken("1")); // "0"
console.log(broken("10000000101101111110011001000")); // "01111111010010000001100110111"
console.log(broken("100010")); // "011101"

console.log(broken2("1")); // "0"
console.log(broken2("10000000101101111110011001000")); // "01111111010010000001100110111"
console.log(broken2("100010")); // "011101"
