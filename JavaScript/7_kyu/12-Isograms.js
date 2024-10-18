function isIsogram(str) {
    const set = new Set(str.toLowerCase());
    return str.length === set.size;
}

console.log((isIsogram('Dermatoglyphics'))); // true
console.log((isIsogram('isogram'))); // true
console.log((isIsogram('aba'))); // false
console.log((isIsogram('moOse'))); // false
console.log((isIsogram('isIsogram'))); // false
console.log((isIsogram(''))); // true
