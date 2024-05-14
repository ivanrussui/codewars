// сложность O(n log n) менее предпочтителен
// function differenceInAges(ages) {
//     ages.sort((a, b) => b - a);
//     const diff = ages[0] - ages[ages.length - 1];
//     return [ages[0], ages[ages.length - 1], diff]
// }

// сложность O(n) более предпочтителен
function differenceInAges(ages) {
    let minAge = ages[0];
    let maxAge = ages[0];

    for (let i = 1; i < ages.length; i++) {
        if (ages[i] < minAge) {
            minAge = ages[i];
        }
        if (ages[i] > maxAge) {
            maxAge = ages[i];
        }
    }

    const diff = maxAge - minAge;
    return [minAge, maxAge, diff];
}

console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]);
