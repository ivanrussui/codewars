// forEach
// function magicSum(numbers) {
//     let sum = 0;
//     numbers.forEach((el) => {
//         if (el % 2) {
//             const a = el.toString().includes('3');
//             if (a) {
//                 sum += el;
//             }
//         }
//     });
//     return sum;
// }

// filter & reduce
function magicSum(numbers) {
    return numbers
        .filter(el => el % 2 && String(el).includes('3'))
        .reduce((acc, el) => acc + el, 0);
}

console.log(magicSum([3])); // 3
console.log(magicSum([3, 13])); // 16
console.log(magicSum([30, 34, 330])); // 0
console.log(magicSum([3, 12, 5, 8, 30, 13])); // 16
console.log(magicSum([])); // 0