function getMiddle(str) {
    return str.substr((Math.ceil(str.length / 2) - 1), (2 - str.length % 2));
}

console.log((getMiddle("test"))); // "es"
console.log((getMiddle("testing"))); // "t"
console.log((getMiddle("middle"))); // "dd"
console.log((getMiddle("A"))); // "A"
