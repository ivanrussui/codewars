function squareOrSquareRoot(array) {
    // for i
    // let arr = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (Number.isInteger(Math.sqrt(array[i]))) {
    //         arr.push(Math.sqrt(array[i]));
    //     } else {
    //         arr.push(Math.pow(array[i], 2));
    //     }
    // }
    // return arr;

    // forEach
    // let arr = [];
    // array.forEach(el => Number.isInteger(Math.sqrt(el)) ? arr.push(Math.sqrt(el)) : arr.push(Math.pow(el, 2)));
    // return arr;

    // map
    return array.map(el => Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : Math.pow(el, 2));
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); // [2, 9, 3, 49, 4, 1]
console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1])); // [10, 10201, 25, 25, 1, 1]
console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6])); // [1, 4, 9, 2, 25, 36]
