function getAverage(marks) {
    // for of
    // let sum = 0;
    // for (const mark of marks) {
    //     sum += mark;
    // }
    // return Math.floor(sum / marks.length);

    // reduce
    const sum = marks.reduce((sum, el) => sum + el, 0);
    return Math.floor(sum / marks.length);
}

console.log(getAverage([2, 2, 2, 2])); // 2
console.log(getAverage([1, 2, 3, 4, 5,])); // 3
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])); // 1