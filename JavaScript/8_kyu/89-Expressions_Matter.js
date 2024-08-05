function expressionMatter(a, b, c) {
    // let res1 = a * (b + c);
    // let res2 = a * b * c;
    // let res3 = a + b * c;
    // let res4 = (a + b) * c;
    // let res5 = a + b + c;
    //
    // let max = Math.max(res1, res2, res3, res4, res5);
    //
    // if (res1 === max) {
    //     return res1;
    // } else if (res2 === max) {
    //     return res2;
    // } else if (res3 === max) {
    //     return res3;
    // } else if (res4 === max) {
    //     return res4;
    // } else if (res5 === max) {
    //     return res5;
    // }

    // более кратко
    return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c);
}

console.log(expressionMatter(2, 1, 2)); // 6
console.log(expressionMatter(2, 1, 1)); // 4
console.log(expressionMatter(1, 1, 1)); // 3
console.log(expressionMatter(1, 2, 3)); // 9
console.log(expressionMatter(1, 3, 1)); // 5
console.log(expressionMatter(2, 2, 2)); // 8