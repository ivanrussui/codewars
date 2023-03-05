const squareSum = num => {
    let res = 0;
    num.forEach(i => res += i * i);
    return res;
}

squareSum([0, 3, 4, 5]);


// function squareSum(numbers) {
//     let result = 0;
//     console.log(result)
//     numbers.forEach((i) => {
//         result += i * i;
//         // return result
//         console.log(result);
//     })
//     return result;
// }