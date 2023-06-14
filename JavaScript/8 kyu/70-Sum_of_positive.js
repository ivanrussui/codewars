function positiveSum(arr) {
    // цикл for
    // let res = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //         res += arr[i];
    //     }
    // }
    // return res;

    // цикл for of
    // let res = 0;
    // for (const ar of arr) {
    //     if (ar > 0) {
    //         res += ar;
    //     }
    // }
    // return res;

    // filter + reduce
    return arr.filter(a => a > 0).reduce((acc, inc) => acc + inc, 0);
}

console.log(positiveSum([ 1, 2, 3, 4, 5 ])) // 15
console.log(positiveSum([ 1, -2, 3, 4, 5 ])) // 13
console.log(positiveSum([])) //0
console.log(positiveSum([-1,-2,-3,-4,-5])) //0