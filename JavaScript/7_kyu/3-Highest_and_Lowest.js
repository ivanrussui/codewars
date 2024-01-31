function highAndLow(numbers) {
    const numbersArr = numbers.split(' ').map(el => Number(el));
    const max = Math.max(...numbersArr);
    const min = Math.min(...numbersArr);
    return `${String(max)} ${String(min)}`;
}

console.log((highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))); // "42 -9";
console.log((highAndLow("-44 4 2 9 100"))); // "100 -44";