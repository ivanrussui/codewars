function invert(array) {
    return array.map(i => {
        return i * -1;
    })
}

console.log(invert([-1, 3, 5, 6, -10]));
