const drawStairs = n => [...Array(n)].map((_, index) => ' '.repeat(index) + 'I').join('\n');

console.log(drawStairs(5));

