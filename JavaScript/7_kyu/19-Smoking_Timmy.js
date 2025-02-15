function startSmoking(bars, boxes) {
    const cigarettesPerPack = 18;
    const packsPerBar = 10;

    const cigarettesFromBars = bars * packsPerBar * cigarettesPerPack;
    const cigarettesFromBoxes = boxes * cigarettesPerPack;

    const initialCigarettes = cigarettesFromBars + cigarettesFromBoxes;

    let stubs = initialCigarettes;
    let totalSmoked = initialCigarettes;

    while (stubs >= 5) {
        const newCigarettes = Math.floor(stubs / 5);
        totalSmoked += newCigarettes;
        stubs = (stubs % 5) + newCigarettes;
    }

    return totalSmoked;
}

console.log(startSmoking(0, 1)); // 22
console.log(startSmoking(1, 0)); // 224
console.log(startSmoking(1, 1)); // 247
console.log(startSmoking(10, 2)); // 2294
