// Ваша задача — создать функцию, которая может принимать в качестве аргумента любое неотрицательное целое число и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.

const descendingOrder = n => +[...n.toString()].map(el => +el).sort().reverse().join('');

console.log((descendingOrder(0))); // 0
console.log((descendingOrder(1))); // 1
console.log((descendingOrder(111))); // 111
console.log((descendingOrder(15))); // 51
console.log((descendingOrder(1021))); // 2110
console.log((descendingOrder(123456789))); // 987654321