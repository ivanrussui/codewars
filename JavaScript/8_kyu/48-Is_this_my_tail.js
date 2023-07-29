function correctTail(bod, tail) {
    const sub = bod.substr(bod.length - tail.length);
    return sub === tail;
}

console.log(correctTail('Fox', 'x'));
