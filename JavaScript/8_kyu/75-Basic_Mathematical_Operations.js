const basicOp = (operation, value1, value2) => eval(value1 + operation + value2);

console.log(basicOp('+', 4, 7)) // 11
console.log(basicOp('-', 15, 18)) // -3
console.log(basicOp('*', 5, 5)) // 25
console.log(basicOp('/', 49, 7)) // 7
