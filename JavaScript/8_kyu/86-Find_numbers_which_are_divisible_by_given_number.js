function divisibleBy(numbers, divisor) {
    // for i
    // let arr = [];
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] % divisor === 0) {
    //         arr.push(numbers[i]);
    //     }
    // }
    // return arr;

    // reduce
    // return numbers.reduce((acc, el) => {
    //     if (el % divisor === 0) {
    //         acc.push(el);
    //     }
    //     return acc;
    // }, []);

    // filter
    return numbers.filter(el => el % divisor === 0);
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2)); // [2,4,6]
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3)); // [3,6]
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4)); // [0,4]
console.log(divisibleBy([0], 4)); // [0]
console.log(divisibleBy([1, 3, 5], 2)); // []