function michaelPays(costs) {
    if (costs < 5) {
        return +costs.toFixed(2);
    } else {
        const katePays = costs / 3;
        if (katePays <= 10) {
            return +(costs - katePays).toFixed(2);
        } else {
            return +(costs - 10).toFixed(2);
        }
    }
}

console.log(michaelPays(15)); // 10
console.log(michaelPays(4)); // 4
console.log(michaelPays(30)); // 20
console.log(michaelPays(80)); // 70
console.log(michaelPays(22)); // 14.67
console.log(michaelPays(5.9181)); // 3.95
console.log(michaelPays(28.789)); // 19.19
console.log(michaelPays(4.325)); // 4.33
