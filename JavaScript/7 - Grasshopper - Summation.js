var summation = function (num) {
    // Code here
    let result = num;
    for(let i = 0; i < num; i++) {
        result += i;
    }
    return result;
}

console.log(summation(8));
