// function capitalize(string, indices) {
//     let newStr = '';
//     for (let i = 0; i < string.length; i++) {
//         newStr += indices.includes(i) ? string[i].toUpperCase() : string[i];
//     }
//     return newStr;
// }

function capitalize(string, indices) {
    const indicesSet = new Set(indices);
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
        newStr += indicesSet.has(i) ? string[i].toUpperCase() : string[i];
    }
    return newStr;
}

console.log(capitalize("abcdef", [1, 2, 5])); // 'aBCdeF'
console.log(capitalize("abcdef", [1, 2, 5, 100])); // 'aBCdeF'
console.log(capitalize("codewars", [1, 3, 5, 50])); // 'cOdEwArs'
console.log(capitalize("abracadabra", [2, 6, 9, 10])); // 'abRacaDabRA'
console.log(capitalize("codewarriors", [5])); // 'codewArriors'
console.log(capitalize("indexinglessons", [0])); // 'Indexinglessons'