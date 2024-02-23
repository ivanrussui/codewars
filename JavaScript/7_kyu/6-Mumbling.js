// На этот раз ни истории, ни теории. В примерах ниже показано, как писать:
// Параметр accum представляет собой строку, включающую только буквы от a..z и A..Z.


// эта релизация проще для понимания
function accum(string) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        result += string[i].toUpperCase();

        for (let j = 0; j < i; j++) {
            result += string[i].toLowerCase();
        }
        if (i !== string.length - 1) {
            result += '-';
        }
    }
    return result;
}

function accum2(string) {
    let arr = string.split('');
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let iter = [];

        for (let j = 0; j <= i; j++) {
            iter.push(j === 0 ? arr[i].toUpperCase() : arr[i].toLowerCase());
        }
        newArr.push(iter.join(''));
    }
    return newArr.join('-');
}

console.log(accum("abcd"));    // Выведет: "A-Bb-Ccc-Dddd"
console.log(accum2("abcd"));    // Выведет: "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // Выведет: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum2("RqaEzty")); // Выведет: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
