function stray(numbers) {
    const uniqueNumber = numbers.reduce((acc, el) => {
        acc[el] ? acc[el] += 1 : acc[el] = 1;
        return acc;
    }, {});


    // for in
    // for (const key in uniqueNumber) {
    //     if (uniqueNumber[key] === 1)
    //         return +key;
    // }

    // Object.keys & find
    const arr = Object.keys(uniqueNumber);
    return +arr.find(el => uniqueNumber[el] === 1);
}

console.log((stray([1, 1, 2]))); // 2
console.log((stray([1, 2, 1]))); // 2
console.log((stray([2, 1, 1]))); // 2
console.log((stray([17, 17, 3, 17, 17, 17, 17]))); // 3
