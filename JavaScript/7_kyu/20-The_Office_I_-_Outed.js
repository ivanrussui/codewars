// 1 вариант
// function outed(meet, boss) {
//     const keys = Object.keys(meet);
//     const values = Object.values(meet);
//
//     // for (let i = 0; i < keys.length; i++) { // for i
//     //     if (keys[i] === boss) {
//     //         meet[keys[i]] *= 2;
//     //     }
//     // }
//
//     keys.forEach(el => el === boss ? meet[el] *= 2 : el); // forEach
//     let totalScope = 0;
//     values.forEach(el => totalScope += el);
//     const happinessRating = totalScope / values.length;
//
//     if (happinessRating <= 5) {
//         return 'Get Out Now!';
//     } else {
//         return 'Nice Work Champ!';
//     }
// }

// 2 вариант
// function outed(meet, boss) {
//     const entries = Object.entries(meet);
//     let totalScope = 0;
//
//     for (let i = 0; i < entries.length; i++) { // for i
//         if (entries[i][0] === boss) {
//             entries[i][1] *= 2;
//         }
//         totalScope += entries[i][1];
//     }
//
//     const happinessRating = totalScope / entries.length;
//
//     if (happinessRating <= 5) {
//         return 'Get Out Now!';
//     } else {
//         return 'Nice Work Champ!';
//     }
// }

// 3 вариант
function outed(meet, boss) {
    let totalScope = 0;
    let count = 0;

    for (const [name, value] of Object.entries(meet)) {
        const currentValue = name === boss ? value * 2 : value;
        totalScope += currentValue;
        count++;
    }

    const happinessRating = totalScope / count;
    return happinessRating <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

console.log(outed({
    'tim': 0,
    'jim': 2,
    'randy': 0,
    'sandy': 7,
    'andy': 0,
    'katie': 5,
    'laura': 1,
    'saajid': 2,
    'alex': 3,
    'john': 2,
    'mr': 0
}, 'laura')); // 'Get Out Now!'
console.log(outed({
    'tim': 1,
    'jim': 3,
    'randy': 9,
    'sandy': 6,
    'andy': 7,
    'katie': 6,
    'laura': 9,
    'saajid': 9,
    'alex': 9,
    'john': 9,
    'mr': 8
}, 'katie')); // 'Nice Work Champ!'
console.log(outed({
    'tim': 2,
    'jim': 4,
    'randy': 0,
    'sandy': 5,
    'andy': 8,
    'katie': 6,
    'laura': 2,
    'saajid': 2,
    'alex': 3,
    'john': 2,
    'mr': 8
}, 'john')); // 'Get Out Now!'
