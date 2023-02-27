function numberToPower(number, power){
    console.info(Math.log2(1024));
    // Code here
    let res = 1;
    for (let i = 0; i < power; i++) {
        res *= number;
    }
    return res;
}

console.log(numberToPower(10, 4));