function meeting(x) {
    const index = x.indexOf('O');
    return index === -1 ? 'None available!' : index;
}

function meeting2(x) {
    const includes = x.includes('O');
    return !includes ? 'None available!' : x.indexOf('O');
}


console.log(meeting(['X', 'O', 'X'])); // 1
console.log(meeting(['O', 'X', 'X', 'X', 'X'])); // 0
console.log(meeting(['X', 'X', 'X', 'X', 'X'])); // 'None available!'

console.log(meeting2(['X', 'O', 'X'])); // 1
console.log(meeting2(['O', 'X', 'X', 'X', 'X'])); // 0
console.log(meeting2(['X', 'X', 'X', 'X', 'X'])); // 'None available!'
