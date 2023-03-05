function findNeedle(haystack) {
    // your code here
    let arr = haystack.indexOf('needle');
    return `found the needle at position ${arr}`;
}

let haystack = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

console.log(findNeedle(haystack));
