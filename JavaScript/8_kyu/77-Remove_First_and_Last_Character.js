function removeChar(str) {
    return str.substring(1, str.length - 1)
}

console.log(removeChar('eloquent')) // 'loquen'
console.log(removeChar('country')) // 'ountr'