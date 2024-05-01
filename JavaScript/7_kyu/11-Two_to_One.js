function longest(s1, s2) {
    const arr = s1.split('').concat(...s2.split(''));
    const uniqArr = arr.sort().filter((item, index) => arr.indexOf(item) === index);
    return uniqArr.join('');
}

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy"
